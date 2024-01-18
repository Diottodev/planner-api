import { create_id } from "@/util/create-id";
import { relations } from "drizzle-orm";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { todos } from "../todos/todos.drizzle";
import { auth_links } from "../auth/auth-links.drizzle";

export const users = pgTable("users", {
	id: text("id")
		.$defaultFn(() => create_id())
		.primaryKey(),
	name: text("name").notNull(),
	email: text("email").unique().notNull(),
	photo: text("photo"),
	created_at: timestamp("created_at").defaultNow(),
	updated_at: timestamp("updated_at").defaultNow(),
});

export const user_relations = relations(users, ({ many }) => ({
	todos: many(todos),
	auth_links: many(auth_links),
}));
