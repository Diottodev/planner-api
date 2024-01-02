import { Elysia } from "elysia";
import {
	create_user_router,
	get_user_router,
	update_user_router,
} from "@/routers";

const app = new Elysia()
	.onError(({ error, set }) => {
		return {
			status: set.status,
			message: error.message,
			data: null,
		};
	})
	.use(create_user_router)
	.use(get_user_router)
	.use(update_user_router)
	.listen(3000);

console.log(
	`🦊 Server is running at ${app.server?.hostname}:${app.server?.port}`,
);

export type APP = typeof app;
