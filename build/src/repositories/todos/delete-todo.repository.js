"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_todo = void 0;
const db_1 = require("@/database/db");
const schemas_1 = require("@/database/schemas");
const drizzle_orm_1 = require("drizzle-orm");
async function delete_todo(id) {
    return (await db_1.db.delete(schemas_1.todos).where((0, drizzle_orm_1.eq)(schemas_1.todos.id, id)).returning()).at(0);
}
exports.delete_todo = delete_todo;
//# sourceMappingURL=delete-todo.repository.js.map