import { NotFoundError } from "elysia";
import { get_todos as get_todos_repository } from "@/repositories";
import { get_user } from "../users/get-user.controller";

export async function get_todos(user_id: string) {
	await get_user(user_id);

	const data = await get_todos_repository(user_id);

	if (!data) {
		throw new NotFoundError("tarefas não encontradas");
	}

	return {
		status: 200,
		message: "tarefas encontradas com sucesso",
		data,
	};
}
