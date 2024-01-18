import { db } from "@/database/db";
import { todos } from "@/database/schemas";
import { eq } from "drizzle-orm";

export async function delete_todo(id: string) {
	return (await db.delete(todos).where(eq(todos.id, id)).returning()).at(0);
}
