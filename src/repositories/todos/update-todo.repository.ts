import { prisma } from "@/database/prisma";
import { TTodo } from "@/schemas";

export async function update_todo(data: TTodo) {
	return await prisma.todo.update({
		where: { id: data.id, user_id: data.user_id },
		data,
	});
}
