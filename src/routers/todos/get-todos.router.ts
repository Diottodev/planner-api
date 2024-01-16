import { get_todos } from "@/controllers";
import { Elysia } from "elysia";
import { authentication } from "../auth/authentication";

export const get_todos_router = (app: Elysia) =>
	app
		.use(authentication)
		.get("/api/todos/get/:userId", async ({ params, user, set }) => {
			if (!user) {
				set.status = 401;
				throw new Error("não autorizado");
			}
			return await get_todos(params.userId);
		});
