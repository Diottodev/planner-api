import { prisma } from "@/database/prisma";

export async function get_user(id: string) {
	return await prisma.user.findUnique({ where: { id } });
}
