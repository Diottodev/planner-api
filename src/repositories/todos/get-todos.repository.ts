import { db } from "@/database/db";
import { todos } from "@/database/schemas";
import { eq } from "drizzle-orm";

export async function get_todos(user_id: string) {
	return await db.select().from(todos).where(eq(todos.user_id, user_id));
}
