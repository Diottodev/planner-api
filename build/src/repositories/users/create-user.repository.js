"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_user = void 0;
const db_1 = require("@/database/db");
const schemas_1 = require("@/database/schemas");
async function create_user(values) {
    return (await db_1.db.insert(schemas_1.users).values(values).returning()).at(0);
}
exports.create_user = create_user;
//# sourceMappingURL=create-user.repository.js.map