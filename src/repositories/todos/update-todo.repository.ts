import { db } from "@/database/db";
import { todos } from "@/database/schemas";
import { TTodo } from "@/schemas";
import { eq } from "drizzle-orm";

export async function update_todo(values: TTodo) {
	return (
		await db
			.update(todos)
			.set(values)
			.where(eq(todos.id, values.id))
			.returning()
	).at(0);
}
