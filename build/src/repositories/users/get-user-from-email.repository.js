"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_user_from_email = void 0;
const db_1 = require("@/database/db");
async function get_user_from_email(email) {
    return await db_1.db.query.users.findFirst({
        where: (users, { eq }) => eq(users.email, email),
    });
}
exports.get_user_from_email = get_user_from_email;
//# sourceMappingURL=get-user-from-email.repository.js.map