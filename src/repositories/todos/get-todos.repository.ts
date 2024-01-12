import { prisma } from "@/database/prisma";

export async function get_todos(user_id: string) {
	return await prisma.todo.findMany({ where: { user_id } });
}
