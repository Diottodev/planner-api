import { t } from "elysia";

export const EmailAuthSchema = t.Object({
	email: t.String({
		format: "email",
		error: "email invalido :(",
	}),
	name: t.String(),
});
