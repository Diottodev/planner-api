import { prisma } from "@/database/prisma";
import { TCreateTodo } from "@/schemas";
import { NotFoundError } from "elysia";
import { create_todo as create_todo_repository } from "@/repositories";

export async function create_todo(body: TCreateTodo) {
	const user = await prisma.user.findUnique({ where: { id: body.user_id } });
	console.log(user);

	if (!user) {
		throw new NotFoundError("usuario não encontrado");
	}
	const data = await create_todo_repository(body);
	console.log(data);

	if (!data.id) {
		throw new NotFoundError("erro ao criar tarefa");
	}

	return new Response(
		JSON.stringify({
			status: 201,
			message: "tarefa criada com sucesso",
			data,
		}),
	);
}
