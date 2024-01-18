import { get_todos_from_status } from "@/controllers";
import { QueryTodos, TCompleted } from "@/schemas/todos/todos.schema";
import { Elysia } from "elysia";
import { authentication } from "../auth/authentication";

export const get_todos_from_status_router = (app: Elysia) =>
	app.use(authentication).get(
		"/api/todos/getStatus/:userId",
		async ({ params, query, user, set }) => {
			if (!user) {
				set.status = 401;
				throw new Error("não autorizado");
			}
			return await get_todos_from_status(
				params.userId,
				query.status as TCompleted,
				Boolean(query.important),
			);
		},
		{
			query: QueryTodos,
		},
	);
