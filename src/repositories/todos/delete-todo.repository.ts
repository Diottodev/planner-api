import { prisma } from "@/database/prisma";

export async function delete_todo(user_id: string, id: string) {
	return await prisma.todo.delete({ where: { id, user_id } });
}
