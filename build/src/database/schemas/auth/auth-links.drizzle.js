"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth_links_relations = exports.auth_links = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const users_drizzle_1 = require("../users/users.drizzle");
const drizzle_orm_1 = require("drizzle-orm");
exports.auth_links = (0, pg_core_1.pgTable)("auth_links", {
    code: (0, pg_core_1.text)("code"),
    user_id: (0, pg_core_1.text)("user_id").references(() => users_drizzle_1.users.id),
});
exports.auth_links_relations = (0, drizzle_orm_1.relations)(exports.auth_links, ({ one }) => ({
    author: one(users_drizzle_1.users, {
        fields: [exports.auth_links.user_id],
        references: [users_drizzle_1.users.id],
    }),
}));
//# sourceMappingURL=auth-links.drizzle.js.map