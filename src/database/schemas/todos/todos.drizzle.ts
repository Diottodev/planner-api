import { create_id } from "@/util/create-id";
import { pgTable, text, timestamp, boolean, pgEnum } from "drizzle-orm/pg-core";
import { users } from "../users/users.drizzle";
import { relations } from "drizzle-orm";

export const completed_enum = pgEnum("completed", [
	"new",
	"doing",
	"completed",
]);

export const todos = pgTable("todos", {
	id: text("id")
		.$defaultFn(() => create_id())
		.primaryKey(),
	title: text("title").notNull(),
	description: text("description").unique().notNull(),
	important: boolean("important"),
	completed: completed_enum("completed").default("new"),
	created_at: timestamp("created_at").defaultNow(),
	updated_at: timestamp("updated_at").defaultNow(),
	user_id: text("user_id").references(() => users.id),
});

export const todos_relations = relations(todos, ({ one }) => ({
	user: one(users, {
		fields: [todos.user_id],
		references: [users.id],
	}),
}));
