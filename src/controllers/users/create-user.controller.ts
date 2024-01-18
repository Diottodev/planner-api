import { create_user as create_user_repository } from "@/repositories/users/create-user.repository";
import { TCreateUser } from "@/schemas/users/user.schema";
import { NotFoundError } from "elysia";
import { db } from "@/database/db";

export async function create_user(body: TCreateUser) {
	const user = await db.query.users.findFirst({
		where: (users, { eq }) => eq(users.email, body.email),
	});

	if (user?.email) {
		throw new NotFoundError("ops.. email já cadastrado");
	}
	const data = await create_user_repository(body);

	if (!data) {
		throw new NotFoundError("erro ao cadastrar conta");
	}

	return {
		status: 201,
		message: "conta cadastrada com sucesso",
		data,
	};
}
