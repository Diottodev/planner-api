import { t, Static as s } from "elysia";

export enum EComplet {
	new = "new",
	doing = "doing",
	completed = "completed",
}

export const CreateTodoSchema = t.Object({
	title: t.String(),
	description: t.String(),
	important: t.Boolean(),
	completed: t.Optional(t.Enum(EComplet)),
	user_id: t.Optional(t.String()),
});

export const TodoSchema = t.Object({
	id: t.String(),
	title: t.String(),
	description: t.String(),
	important: t.Boolean(),
	completed: t.Optional(t.Enum(EComplet)),
	user_id: t.Optional(t.String()),
	created_at: t.Optional(t.String()),
	updated_at: t.Optional(t.String()),
});

export const QueryTodos = t.Object({
	status: t.Optional(t.Enum(EComplet)),
	important: t.Optional(t.String()),
});

export type TCompleted = "new" | "doing" | "completed";
export type TTodo = s<typeof TodoSchema>;
export type TCreateTodo = s<typeof CreateTodoSchema>;
