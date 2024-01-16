import { update_user } from "@/controllers";
import { CreateUserSchema, GetUserSchema } from "@/schemas/users/user.schema";
import { Elysia } from "elysia";

export const update_user_router = (app: Elysia) =>
	app.put(
		"/api/users/update/:id",
		async ({ body, params }) => await update_user(body, params.id),
		{
			body: CreateUserSchema,
			params: GetUserSchema,
		},
	);
