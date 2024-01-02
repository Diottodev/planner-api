import { get_user } from "@/handlers";
import { GetUserSchema } from "@/schemas/users/user.schema";
import { Elysia } from "elysia";

export const get_user_router = (app: Elysia) =>
	app.get("/api/users/get/:id", ({ params }) => get_user(params.id), {
		params: GetUserSchema,
		detail: { tags: ["Users"] },
	});
