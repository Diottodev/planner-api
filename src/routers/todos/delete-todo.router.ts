import { delete_todo } from "@/handlers";
import { Elysia } from "elysia";
import { authentication } from "../auth/authentication";

export const delete_todo_router = (app: Elysia) =>
	app
		.use(authentication)
		.delete("/api/todos/delete/:userId/:id", async ({ params, user, set }) => {
			if (!user) {
				set.status = 401;
				throw new Error("não autorizado");
			}
			return await delete_todo(params.userId, params.id);
		});
