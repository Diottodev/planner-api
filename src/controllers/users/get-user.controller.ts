import { get_user as get_user_repository } from "@/repositories/users/get-user.repository";
import { NotFoundError } from "elysia";

export async function get_user(id: string) {
	const user = await get_user_repository(id);

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
