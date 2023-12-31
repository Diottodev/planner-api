import { t, Static as s } from "elysia";

export const CreateUserSchema = t.Object({
	name: t.String(),
	email: t.String({
		format: "email",
		error: "email invalido :(",
	}),
	photo: t.Optional(t.String()),
});

export const UserSchema = t.Object({
	id: t.Optional(t.String()),
	name: t.String(),
	email: t.String(),
	photo: t.Optional(t.String()),
	created_at: t.Date(),
	updated_at: t.Date(),
});

export type TCreateUser = s<typeof CreateUserSchema>;
export type TUser = s<typeof UserSchema>;
