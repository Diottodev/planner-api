import { NotFoundError } from "elysia";
import { get_auth_link as get_auth_link_repository } from "@/repositories";

export async function get_auth_link(code: string) {
	const data = await get_auth_link_repository(code);

	if (!data) {
		throw new NotFoundError("sem link de autenticação");
	}

	return {
		status: 200,
		message: "autenticado",
		data,
	};
}
