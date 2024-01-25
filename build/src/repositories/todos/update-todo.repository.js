"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update_todo = void 0;
const db_1 = require("@/database/db");
const schemas_1 = require("@/database/schemas");
const drizzle_orm_1 = require("drizzle-orm");
async function update_todo(values) {
    return (await db_1.db
        .update(schemas_1.todos)
        .set(values)
        .where((0, drizzle_orm_1.eq)(schemas_1.todos.id, values.id))
        .returning()).at(0);
}
exports.update_todo = update_todo;
//# sourceMappingURL=update-todo.repository.js.map