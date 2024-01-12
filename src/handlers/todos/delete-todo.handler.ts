import { NotFoundError } from "elysia";
import { delete_todo as delete_todo_repository } from "@/repositories";
import { prisma } from "@/database/prisma";

export async function delete_todo(user_id: string, id: string) {
	const user = await prisma.user.findUnique({ where: { id: user_id } });

	if (!user) {
		throw new NotFoundError("usuario não encontrado");
	}

	const data = await delete_todo_repository(user_id, id);

	if (!data) {
		throw new NotFoundError("tarefa não encontrada");
	}

	return {
		status: 200,
		message: `tarefa ${data.title} deletada com sucesso`,
		data,
	};
}
