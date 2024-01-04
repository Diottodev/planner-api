import { prisma } from "@/database/prisma";

export async function get_user_from_email(email: string) {
	return await prisma.user.findUnique({ where: { email } });
}
