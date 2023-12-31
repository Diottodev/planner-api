import { update_user as update_user_repository } from "@/repositories/users/update-user.repository";
import { TCreateUser } from "@/schemas/users/user.schema";
import { get_user } from "./get-user.handler";

export async function update_user(body: TCreateUser, id: string) {
	const user = await get_user(id);

	if (user.status !== 200) {
		return user;
	}
	const data = await update_user_repository(body, id);

	return {
		status: 200,
		message: "perfil alterado com sucesso",
		data,
	};
}
