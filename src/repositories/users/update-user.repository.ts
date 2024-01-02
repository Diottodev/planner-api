import { prisma } from "@/database/prisma";
import { TCreateUser } from "@/schemas/users/user.schema";

export async function update_user(data: TCreateUser, id: string) {
	return await prisma.user.update({ where: { id }, data });
}
