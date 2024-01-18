import { db } from "@/database/db";
import { auth_links } from "@/database/schemas";
import { eq } from "drizzle-orm";

export async function get_auth_link(code: string) {
	return await db.query.auth_links.findFirst({
		where: eq(auth_links.code, code),
	});
}
