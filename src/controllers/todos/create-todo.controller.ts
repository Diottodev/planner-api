import { TCreateTodo } from "@/schemas";
import { NotFoundError } from "elysia";
import { create_todo as create_todo_repository } from "@/repositories";
import { get_user } from "../users/get-user.controller";

export async function create_todo(body: TCreateTodo) {
	await get_user(body.user_id as string);

	const data = await create_todo_repository(body);

	if (!data) {
		throw new NotFoundError("erro ao criar tarefa");
	}

	return {
		status: 201,
		message: "tarefa criada com sucesso",
		data,
	};
}
