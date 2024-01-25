"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_user = void 0;
const get_user_repository_1 = require("@/repositories/users/get-user.repository");
const elysia_1 = require("elysia");
async function get_user(id) {
    const user = await (0, get_user_repository_1.get_user)(id);
    if (!user) {
        throw new elysia_1.NotFoundError("perfil não encontrado");
    }
    return {
        status: 200,
        message: "perfil encontrado",
        data: user,
    };
}
exports.get_user = get_user;
//# sourceMappingURL=get-user.controller.js.map