"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_todo = void 0;
const db_1 = require("@/database/db");
const schemas_1 = require("@/database/schemas");
const drizzle_orm_1 = require("drizzle-orm");
async function get_todo(id) {
    return await db_1.db.query.todos.findFirst({
        where: (0, drizzle_orm_1.eq)(schemas_1.todos.id, id),
    });
}
exports.get_todo = get_todo;
//# sourceMappingURL=get-todo.repository.js.map