import {
	email_options,
	tranporter_service,
	convert_react_to_html,
} from "@/auth";
import { get_user_from_email } from "@/controllers/users/get-user-from-email.controller";
import { db } from "@/database/db";
import { auth_links } from "@/database/schemas";
import { EmailAuthSchema } from "@/schemas/email/email-auth.schema";
import { create_id } from "@/util/create-id";
import { Elysia, NotFoundError } from "elysia";

const env = process.env;

export const send_email_auth_router = (app: Elysia) =>
	app.post(
		"/api/users/auth",
		async ({ body }) => {
			const user_from_email = await get_user_from_email(body.email);

			const auth_id = create_id();

			await db
				.insert(auth_links)
				.values({ code: auth_id, user_id: user_from_email.data.id });

			const auth_link = new URL(
				"/api/auth-links/authenticate",
				env.API_BASE_URL,
			);
			auth_link.searchParams.set("code", auth_id);
			auth_link.searchParams.set("redirect", env.AUTH_REDIRECT_API as string);

			const html = convert_react_to_html(
				user_from_email.data.name,
				"Confira o link de autenticação",
				body.email,
				auth_link.toString(),
			);
			const options = {
				email: body.email,
				subject: "Atentique seu email",
				html,
			};
			try {
				const data = await tranporter_service.sendMail(email_options(options));
				if (data.accepted.includes(body.email)) {
					return {
						status: 200,
						message: `email enviado com sucesso para: ${body.email}`,
						data,
					};
				}
			} catch (error) {
				throw new NotFoundError("Ocorreu um erro ao enviar o email");
			}
		},
		{ body: EmailAuthSchema },
	);
