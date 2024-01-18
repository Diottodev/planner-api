import { update_user } from "@/controllers";
import { GetUserSchema, UserSchema } from "@/schemas/users/user.schema";
import { Elysia } from "elysia";

export const update_user_router = (app: Elysia) =>
	app.put(
		"/api/users/account/update/:id",
		async ({ body, params }) => {
			const body_user = { ...body, id: params.id };
			return await update_user(body_user);
		},
		{
			body: UserSchema,
			params: GetUserSchema,
		},
	);
