import Elysia from "elysia";
import { authentication } from "./authentication";
import { set_jwt_cookie } from "./set-jwt-cookie";
import { get_auth_link } from "@/controllers/auth/get_auth_link.controller";

export const auth_links_authenticate = (app: Elysia) =>
	app
		.use(set_jwt_cookie)
		.get(
			"/api/auth-links/authenticate",
			async ({ query, set, jwt, setCookie }) => {
				const code = query.code;
				const user_id_from_code = await get_auth_link(code || "");

				if (user_id_from_code.status !== 200) {
					set.status = 401;
					throw new Error("não autorizado");
				}

				const user_id = user_id_from_code.data.user_id as string;
				const auth = await jwt.sign({
					userId: user_id,
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
