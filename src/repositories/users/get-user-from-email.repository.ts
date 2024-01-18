import { db } from "@/database/db";

export async function get_user_from_email(email: string) {
	return await db.query.users.findFirst({
		where: (users, { eq }) => eq(users.email, email),
	});
}
