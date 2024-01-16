import { get_todo } from "@/controllers";
import { Elysia } from "elysia";

export const get_todo_router = (app: Elysia) =>
	app.get("/api/todos/get/:userId/:id", async ({ params, user, set }) => {
		if (!user) {
			set.status = 401;
			throw new Error("não autorizado");
		}
		return await get_todo(params.userId, params.id);
	});
