import { create_todo } from "@/handlers";
import { CreateTodoSchema } from "@/schemas";
import { Elysia } from "elysia";
import { authentication } from "../auth/authentication";

export const create_todo_router = (app: Elysia) =>
	app.use(authentication).post(
		"/api/todos/create/:userId",
		async ({ body, params, user, set }) => {
			if (!user) {
				set.status = 401;
				throw new Error("não autorizado");
			}
			const data = { ...body, user_id: params.userId };
			return await create_todo(data);
		},
		{
			body: CreateTodoSchema,
		},
	);
