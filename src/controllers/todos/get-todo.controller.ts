import { NotFoundError } from "elysia";
import { get_todo as get_todo_repository } from "@/repositories";
import { prisma } from "@/database/prisma";

export async function get_todo(user_id: string, id: string) {
	const user = await prisma.user.findUnique({ where: { id: user_id } });

	if (!user) {
		throw new NotFoundError("usuario não encontrado");
	}

	const data = await get_todo_repository(user_id, id);

	if (!data) {
		throw new NotFoundError("tarefa não encontrada");
	}

	return{
			status: 200,
			message: "tarefa encontrada com sucesso",
			data,
		}
}
