import { NotFoundError } from "elysia";
import { update_todo as update_todo_repository } from "@/repositories";
import { TTodo } from "@/schemas";
import { get_user } from "../users/get-user.controller";

export async function update_todo(body: TTodo) {
	await get_user(body.user_id as string);

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
