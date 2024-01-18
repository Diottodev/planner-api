import { NotFoundError } from "elysia";
import { get_todos_from_status as get_todos_from_status_repository } from "@/repositories";
import { get_user } from "../users/get-user.controller";

export async function get_todos_from_status(
	user_id: string,
	status: "new" | "doing" | "completed",
	important?: boolean,
) {
	await get_user(user_id);

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
	};
}
