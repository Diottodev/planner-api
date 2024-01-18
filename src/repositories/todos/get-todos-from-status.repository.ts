import { db } from "@/database/db";
import { todos } from "@/database/schemas";
import { and, eq } from "drizzle-orm";

export async function get_todos_from_status(
	user_id: string,
	status: "new" | "doing" | "completed",
	important = false,
) {
	return await db
		.select()
		.from(todos)
		.where(
			and(
				eq(todos.user_id, user_id),
				eq(todos.completed, status),
				eq(todos.important, important),
			),
		);
}
