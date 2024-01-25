"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_auth_link = void 0;
const db_1 = require("@/database/db");
const schemas_1 = require("@/database/schemas");
const drizzle_orm_1 = require("drizzle-orm");
async function get_auth_link(code) {
    return await db_1.db.query.auth_links.findFirst({
        where: (0, drizzle_orm_1.eq)(schemas_1.auth_links.code, code),
    });
}
exports.get_auth_link = get_auth_link;
//# sourceMappingURL=get_auth_link.repository.js.map