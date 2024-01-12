import { prisma } from "@/database/prisma";
import Elysia from "elysia";
import { set_jwt_cookie } from "./set-jwt-cookie";

export const authentication = (app: Elysia) =>
	app.use(set_jwt_cookie).derive(async ({ cookie, jwt, set }) => {
		const getCurrentUser = async () => {
			const payload = await jwt.verify(cookie.auth);

			if (!payload) {
				set.status = 401;
				throw new Error("não autorizado");
			}
			return payload;
		};
		if (!cookie?.auth) {
			set.status = 401;
			throw new Error("não autorizado");
		}
		const { userId } = await getCurrentUser();
		if (!userId) {
			set.status = 401;
			throw new Error("não autorizado");
		}

		const user = await prisma.user.findUnique({
			where: {
				id: userId,
			},
		});
		if (!user) {
			set.status = 401;
			throw new Error("não autorizado");
		}
		return {
			user,
		};
	});
