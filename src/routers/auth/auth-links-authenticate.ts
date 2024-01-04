import Elysia, { t } from "elysia";
import { is_authenticated } from "./authentication";
import { prisma } from "@/database/prisma";
import cookie from "@elysiajs/cookie";
import jwt from "@elysiajs/jwt";
import { JwtPayloadSchema } from "@/schemas/jwt/jwt.schema";

export const auth_links_authenticate = (app: Elysia) =>
	app
		.use(
			jwt({
				name: "jwt",
				secret: process.env.JWT_SECRET_KEY as string,
				schema: JwtPayloadSchema,
			}),
		)
		.use(cookie())
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
		.use(is_authenticated)
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
