import { NotFoundError } from "elysia";
import { get_todo as get_todo_repository } from "@/repositories";
import { get_user } from "../users/get-user.controller";

export async function get_todo(user_id: string, id: string) {
	await get_user(user_id);

	const data = await get_todo_repository(id);

	if (!data) {
		throw new NotFoundError("tarefa não encontrada");
	}

	return {
		status: 200,
		message: "tarefa encontrada com sucesso",
		data,
	};
}
