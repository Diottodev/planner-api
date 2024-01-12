import { prisma } from "@/database/prisma";
import { NotFoundError } from "elysia";
import { update_todo as update_todo_repository } from "@/repositories";
import { TTodo } from "@/schemas";

export async function update_todo(body: TTodo) {
	const user = await prisma.user.findUnique({ where: { id: body.user_id } });

	if (!user) {
		throw new NotFoundError("usuario não encontrado");
	}

	const data = await update_todo_repository(body);

	if (!data) {
		throw new NotFoundError("erro ao atualizar tarefa");
	}

	return {
		status: 200,
		message: "tarefas atualizada com sucesso",
		data,
	};
}
