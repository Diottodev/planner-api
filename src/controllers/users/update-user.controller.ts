import { update_user as update_user_repository } from "@/repositories/users/update-user.repository";
import { TUser } from "@/schemas/users/user.schema";
import { get_user } from "./get-user.controller";
import { NotFoundError } from "elysia";

export async function update_user(body: TUser) {
	await get_user(body.id);

	const data = await update_user_repository(body);

	if (!data) {
		throw new NotFoundError("erro ao atualizar conta");
	}

	return {
		status: 200,
		message: "perfil alterado com sucesso",
		data,
	};
}
