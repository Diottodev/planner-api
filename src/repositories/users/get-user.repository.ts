import { db } from "@/database/db";

export async function get_user(id: string) {
	return await db.query.users.findFirst({
		where: (users, { eq }) => eq(users.id, id),
	});
}
