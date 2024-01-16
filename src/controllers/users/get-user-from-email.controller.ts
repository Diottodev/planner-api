import { get_user_from_email as get_user_from_email_repository } from "@/repositories/users/get-user-from-email.repository";
import { NotFoundError } from "elysia";

export async function get_user_from_email(email: string) {
	const user = await get_user_from_email_repository(email);

	if (!user) {
		throw new NotFoundError("perfil não encontrado");
	}

	return new Response(
		JSON.stringify({
			status: 200,
			message: "perfil encontrado",
			data: user,
		}),
	);
}
