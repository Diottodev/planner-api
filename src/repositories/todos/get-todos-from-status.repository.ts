import { prisma } from "@/database/prisma";

export async function get_todos_from_status(
	user_id: string,
	status: "new" | "doing" | "completed",
	important = false,
) {
	return await prisma.todo.findMany({
		where: { user_id, completed: status, important },
	});
}
