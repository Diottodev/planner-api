import { prisma } from "@/database/prisma";
import { NotFoundError } from "elysia";
import { get_todos_from_status as get_todos_from_status_repository } from "@/repositories";

export async function get_todos_from_status(
	user_id: string,
	status: "new" | "doing" | "completed",
	important?: boolean,
) {
	const user = await prisma.user.findUnique({ where: { id: user_id } });

	if (!user) {
		throw new NotFoundError("usuario não encontrado");
	}

	const data = await get_todos_from_status_repository(
		user_id,
		status,
		important,
	);

	if (!data) {
		throw new NotFoundError("tarefas não encontradas");
	}

	const translate_status = {
		new: "novas",
		doing: "em andamento",
		completed: "completadas",
	};

	return {
			status: 200,
			message: `tarefas ${translate_status[status]} ${
				important === true ? "importantes" : ""
			} encontradas com sucesso`,
			data,
		}
}
