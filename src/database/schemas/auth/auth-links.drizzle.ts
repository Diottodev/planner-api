import { pgTable, text } from "drizzle-orm/pg-core";
import { users } from "../users/users.drizzle";
import { relations } from "drizzle-orm";

export const auth_links = pgTable("auth_links", {
	code: text("code"),
	user_id: text("user_id").references(() => users.id),
});

export const auth_links_relations = relations(auth_links, ({ one }) => ({
	author: one(users, {
		fields: [auth_links.user_id],
		references: [users.id],
	}),
}));
