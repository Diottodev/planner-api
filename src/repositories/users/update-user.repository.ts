import { db } from "@/database/db";
import { users } from "@/database/schemas";
import { TUser } from "@/schemas";
import { eq } from "drizzle-orm";

export async function update_user(values: TUser) {
	return (
		await db
			.update(users)
			.set(values)
			.where(eq(users.id, values.id))
			.returning()
	).at(0);
}
