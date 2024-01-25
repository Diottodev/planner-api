"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_user = void 0;
const db_1 = require("@/database/db");
async function get_user(id) {
    return await db_1.db.query.users.findFirst({
        where: (users, { eq }) => eq(users.id, id),
    });
}
exports.get_user = get_user;
//# sourceMappingURL=get-user.repository.js.map