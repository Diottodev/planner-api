import { t, Static as s } from "elysia";
import { createInsertSchema, createSelectSchema } from "drizzle-typebox";
import { todos } from "@/database/schemas";

export enum EComplet {
	new = "new",
	doing = "doing",
	completed = "completed",
}

export const CreateTodoSchema = createInsertSchema(todos);

export const TodoSchema = createSelectSchema(todos);

export const QueryTodos = t.Object({
	status: t.Optional(t.Enum(EComplet)),
	important: t.Optional(t.String()),
});

export type TCompleted = "new" | "doing" | "completed";
export type TTodo = s<typeof TodoSchema>;
export type TCreateTodo = s<typeof CreateTodoSchema>;
