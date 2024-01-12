import { update_todo } from "@/handlers";
import { TodoSchema } from "@/schemas";
import { Elysia } from "elysia";
import { authentication } from "../auth/authentication";

export const update_todo_router = (app: Elysia) =>
	app.use(authentication).put(
		"/api/todos/update/:userId/:id",
		async ({ body, params, user, set }) => {
			if (!user) {
				set.status = 401;
				throw new Error("não autorizado");
			}
			const data = { ...body, id: params.id, user_id: params.userId };
			return await update_todo(data);
		},
		{
			body: TodoSchema,
		},
	);
