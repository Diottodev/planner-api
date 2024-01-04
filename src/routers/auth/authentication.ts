import { prisma } from "@/database/prisma";
import { JwtPayloadSchema } from "@/schemas/jwt/jwt.schema";
import cookie from "@elysiajs/cookie";
import jwt from "@elysiajs/jwt";
import Elysia from "elysia";

export const is_authenticated = (app: Elysia) =>
	app
		.use(
			jwt({
				name: "jwt",
				secret: process.env.JWT_SECRET_KEY as string,
				schema: JwtPayloadSchema,
			}),
		)
		.use(cookie())
		.derive(async ({ cookie, jwt, set }) => {
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
