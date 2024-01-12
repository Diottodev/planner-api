import { create_user } from "@/handlers";
import { CreateUserSchema } from "@/schemas/users/user.schema";
import { Elysia } from "elysia";

export const create_user_router = (app: Elysia) =>
	app.post("/api/users/create", async ({ body }) => await create_user(body), {
		body: CreateUserSchema,
	});
