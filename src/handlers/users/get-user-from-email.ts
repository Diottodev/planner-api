import { get_user_from_email as get_user_from_email_repository } from "@/repositories/users/get-user-from-email.repository";
import { TResponse } from "@/schemas/users/user.schema";
import { NotFoundError } from "elysia";

export async function get_user_from_email(email: string): Promise<TResponse> {
	const user = await get_user_from_email_repository(email);

	if (!user) {
		throw new NotFoundError("perfil não encontrado");
	}

	return {
		status: 200,
		message: "perfil encontrado",
		data: user,
	};
}
