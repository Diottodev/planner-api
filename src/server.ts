import { Elysia } from "elysia";
import {
	create_user_router,
	get_user_router,
	send_email_auth_router,
	update_user_router,
	create_todo_router,
	get_todo_router,
	get_todos_from_status_router,
	get_todos_router,
	update_todo_router,
	delete_todo_router,
} from "@/routers";
import cors from "@elysiajs/cors";

const server = 
	new Elysia()
		.get("/", () => {
			return new Response("🦊 Server is running");
		})
		.onError(({ error, set }) => {
			return {
				status: set.status,
				message: error.message,
				data: error,
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
		.use(create_todo_router)
		.use(get_todo_router)
		.use(get_todos_router)
		.use(get_todos_from_status_router)
		.use(update_todo_router)
		.use(delete_todo_router)
		.listen(3000);

console.log(`🦊 Server is running at ${server?.server?.url}`);

export type APP = typeof server;

