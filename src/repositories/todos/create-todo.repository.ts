import { prisma } from "@/database/prisma";
import { TCreateTodo } from "@/schemas";

export async function create_todo(data: TCreateTodo) {
	return await prisma.todo.create({ data });
}
