"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update_user = void 0;
const update_user_repository_1 = require("@/repositories/users/update-user.repository");
const get_user_controller_1 = require("./get-user.controller");
const elysia_1 = require("elysia");
async function update_user(body) {
    await (0, get_user_controller_1.get_user)(body.id);
    const data = await (0, update_user_repository_1.update_user)(body);
    if (!data) {
        throw new elysia_1.NotFoundError("erro ao atualizar conta");
    }
    return {
        status: 200,
        message: "perfil alterado com sucesso",
        data,
    };
}
exports.update_user = update_user;
//# sourceMappingURL=update-user.controller.js.map