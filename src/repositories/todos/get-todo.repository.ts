import { prisma } from "@/database/prisma";

export async function get_todo(user_id: string, id: string) {
	return await prisma.todo.findUnique({ where: { id, user_id } });
}
