"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todos_relations = exports.todos = exports.completed_enum = void 0;
const create_id_1 = require("@/util/create-id");
const pg_core_1 = require("drizzle-orm/pg-core");
const users_drizzle_1 = require("../users/users.drizzle");
const drizzle_orm_1 = require("drizzle-orm");
exports.completed_enum = (0, pg_core_1.pgEnum)("completed", [
    "new",
    "doing",
    "completed",
]);
exports.todos = (0, pg_core_1.pgTable)("todos", {
    id: (0, pg_core_1.text)("id")
        .$defaultFn(() => (0, create_id_1.create_id)())
        .primaryKey(),
    title: (0, pg_core_1.text)("title").notNull(),
    description: (0, pg_core_1.text)("description").unique().notNull(),
    important: (0, pg_core_1.boolean)("important"),
    completed: (0, exports.completed_enum)("completed").default("new"),
    created_at: (0, pg_core_1.timestamp)("created_at").defaultNow(),
    updated_at: (0, pg_core_1.timestamp)("updated_at").defaultNow(),
    user_id: (0, pg_core_1.text)("user_id").references(() => users_drizzle_1.users.id),
});
exports.todos_relations = (0, drizzle_orm_1.relations)(exports.todos, ({ one }) => ({
    user: one(users_drizzle_1.users, {
        fields: [exports.todos.user_id],
        references: [users_drizzle_1.users.id],
    }),
}));
//# sourceMappingURL=todos.drizzle.js.map