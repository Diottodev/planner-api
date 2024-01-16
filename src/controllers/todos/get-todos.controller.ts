import { prisma } from "@/database/prisma";
import { NotFoundError } from "elysia";
import { get_todos as get_todos_repository } from "@/repositories";

export async function get_todos(user_id: string) {
	const user = await prisma.user.findUnique({ where: { id: user_id } });

	if (!user) {
		throw new NotFoundError("usuario não encontrado");
	}
	const data = await get_todos_repository(user_id);

	if (!data) {
		throw new NotFoundError("tarefas não encontradas");
	}

	return {
			status: 200,
			message: "tarefas encontradas com sucesso",
			data,
		}
}
