"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_user_from_email = void 0;
const get_user_from_email_repository_1 = require("@/repositories/users/get-user-from-email.repository");
const elysia_1 = require("elysia");
async function get_user_from_email(email) {
    const user = await (0, get_user_from_email_repository_1.get_user_from_email)(email);
    if (!user) {
        throw new elysia_1.NotFoundError("perfil não encontrado");
    }
    return {
        status: 200,
        message: "perfil encontrado",
        data: user,
    };
}
exports.get_user_from_email = get_user_from_email;
//# sourceMappingURL=get-user-from-email.controller.js.map