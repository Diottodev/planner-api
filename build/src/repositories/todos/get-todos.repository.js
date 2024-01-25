"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_todos = void 0;
const db_1 = require("@/database/db");
const schemas_1 = require("@/database/schemas");
const drizzle_orm_1 = require("drizzle-orm");
async function get_todos(user_id) {
    return await db_1.db.select().from(schemas_1.todos).where((0, drizzle_orm_1.eq)(schemas_1.todos.user_id, user_id));
}
exports.get_todos = get_todos;
//# sourceMappingURL=get-todos.repository.js.map