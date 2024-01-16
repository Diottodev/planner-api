import { prisma } from "@/database/prisma";
import { create_user as create_user_repository } from "@/repositories/users/create-user.repository";
import { TCreateUser } from "@/schemas/users/user.schema";
import { NotFoundError } from "elysia";

export async function create_user(body: TCreateUser) {
	const user = await prisma.user.findUnique({ where: { email: body.email } });

	if (user) {
		throw new NotFoundError("ops.. email já cadastrado");
	}
	const data = await create_user_repository(body);

	return {
			status: 201,
			message: "conta cadastrada com sucesso",
			data,
		}
}
