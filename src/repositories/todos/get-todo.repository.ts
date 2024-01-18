import { db } from "@/database/db";
import { todos } from "@/database/schemas";
import { eq } from "drizzle-orm";

export async function get_todo(id: string) {
	return await db.query.todos.findFirst({
		where: eq(todos.id, id),
	});
}
