"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update_user = void 0;
const db_1 = require("@/database/db");
const schemas_1 = require("@/database/schemas");
const drizzle_orm_1 = require("drizzle-orm");
async function update_user(values) {
    return (await db_1.db
        .update(schemas_1.users)
        .set(values)
        .where((0, drizzle_orm_1.eq)(schemas_1.users.id, values.id))
        .returning()).at(0);
}
exports.update_user = update_user;
//# sourceMappingURL=update-user.repository.js.map