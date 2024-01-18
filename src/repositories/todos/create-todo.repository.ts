import { db } from "@/database/db";
import { todos } from "@/database/schemas";
import { TCreateTodo } from "@/schemas";

export async function create_todo(values: TCreateTodo) {
	return (await db.insert(todos).values(values).returning()).at(0);
}
