import { create_user } from "@/handlers";
import { CreateUserSchema } from "@/schemas/users/user.schema";
import { Elysia } from "elysia";

export const create_user_router = (app: Elysia) =>
	app.post("/api/users/create", ({ body }) => create_user(body), {
		body: CreateUserSchema,
		detail: { tags: ["Users"] },
	});
