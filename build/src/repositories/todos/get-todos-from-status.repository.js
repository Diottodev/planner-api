"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_todos_from_status = void 0;
const db_1 = require("@/database/db");
const schemas_1 = require("@/database/schemas");
const drizzle_orm_1 = require("drizzle-orm");
async function get_todos_from_status(user_id, status, important = false) {
    return await db_1.db
        .select()
        .from(schemas_1.todos)
        .where((0, drizzle_orm_1.and)((0, drizzle_orm_1.eq)(schemas_1.todos.user_id, user_id), (0, drizzle_orm_1.eq)(schemas_1.todos.completed, status), (0, drizzle_orm_1.eq)(schemas_1.todos.important, important)));
}
exports.get_todos_from_status = get_todos_from_status;
//# sourceMappingURL=get-todos-from-status.repository.js.map