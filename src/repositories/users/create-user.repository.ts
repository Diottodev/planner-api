import { prisma } from "@/database/prisma";
import { TCreateUser } from "@/schemas/users/user.schema";

export async function create_user(data: TCreateUser) {
	return await prisma.user.create({ data });
}
