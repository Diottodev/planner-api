"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_todo = void 0;
const db_1 = require("@/database/db");
const schemas_1 = require("@/database/schemas");
async function create_todo(values) {
    return (await db_1.db.insert(schemas_1.todos).values(values).returning()).at(0);
}
exports.create_todo = create_todo;
//# sourceMappingURL=create-todo.repository.js.map