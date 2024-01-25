"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_relations = exports.users = void 0;
const create_id_1 = require("@/util/create-id");
const drizzle_orm_1 = require("drizzle-orm");
const pg_core_1 = require("drizzle-orm/pg-core");
const todos_drizzle_1 = require("../todos/todos.drizzle");
const auth_links_drizzle_1 = require("../auth/auth-links.drizzle");
exports.users = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.text)("id")
        .$defaultFn(() => (0, create_id_1.create_id)())
        .primaryKey(),
    name: (0, pg_core_1.text)("name").notNull(),
    email: (0, pg_core_1.text)("email").unique().notNull(),
    photo: (0, pg_core_1.text)("photo"),
    created_at: (0, pg_core_1.timestamp)("created_at").defaultNow(),
    updated_at: (0, pg_core_1.timestamp)("updated_at").defaultNow(),
});
exports.user_relations = (0, drizzle_orm_1.relations)(exports.users, ({ many }) => ({
    todos: many(todos_drizzle_1.todos),
    auth_links: many(auth_links_drizzle_1.auth_links),
}));
//# sourceMappingURL=users.drizzle.js.map