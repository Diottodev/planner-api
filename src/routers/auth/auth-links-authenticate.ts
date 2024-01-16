import Elysia from "elysia";
import { authentication } from "./authentication";
import { prisma } from "@/database/prisma";
import { set_jwt_cookie } from "./set-jwt-cookie";

export const auth_links_authenticate = (app: Elysia) =>
	app
		.use(set_jwt_cookie)
		.get(
			"/api/auth-links/authenticate",
			async ({ query, set, jwt, setCookie }) => {
				const code = query.code;
				const user_id = await prisma.authLinks.findFirst({ where: { code } });

				const auth = await jwt.sign({
					userId: user_id?.user_id as string,
				});

				setCookie("auth", auth, {
					maxAge: 7 * 86400,
					path: "/",
				});

				set.redirect = query.redirect;
			},
		)
		.use(authentication)
		.get("/pannel", async ({ user, set }) => {
			if (!user) {
				set.status = 401;
				throw new Error("não autorizado");
			}
			return {
				status: 200,
				message: "logado com sucesso",
				data: user,
			};
		});
