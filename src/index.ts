import { Elysia } from "elysia";
import {
	auth_links_authenticate,
	create_user_router,
	get_user_router,
	send_email_auth_router,
	update_user_router,
} from "@/routers";
import cors from "@elysiajs/cors";

const app = new Elysia()
	.onError(({ error, set }) => {
		return {
			status: set.status,
			message: error.message,
			data: null,
		};
	})
	.use(
		cors({
			credentials: true,
			allowedHeaders: ["Content-type"],
			methods: ["GET", "DELETE", "PATCH", "POST", "PUT", "HEAD", "OPTIONS"],
			origin: (request): boolean => {
				const origin = request.headers.get("origin");
				if (!origin) {
					return false;
				}
				return true;
			},
		}),
	)
	.use(create_user_router)
	.use(get_user_router)
	.use(update_user_router)
	.use(send_email_auth_router)
	.use(auth_links_authenticate)
	.listen(3000);

console.log(
	`🦊 Server is running at ${app.server?.hostname}:${app.server?.port}`,
);

export type APP = typeof app;
