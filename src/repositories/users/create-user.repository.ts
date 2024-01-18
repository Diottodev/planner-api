import { db } from "@/database/db";
import { users } from "@/database/schemas";
import { TCreateUser } from "@/schemas";

export async function create_user(values: TCreateUser) {
	return (await db.insert(users).values(values).returning()).at(0);
}
