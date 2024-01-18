import { NotFoundError } from "elysia";
import { delete_todo as delete_todo_repository } from "@/repositories";
import { get_user } from "../users/get-user.controller";

export async function delete_todo(user_id: string, id: string) {
	await get_user(user_id);

	const data = await delete_todo_repository(id);

	if (!data) {
		throw new NotFoundError("tarefa não encontrada");
	}

	return {
		status: 200,
		message: `tarefa ${data.title} deletada com sucesso`,
		data,
	};
}
