"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update_todo = void 0;
const elysia_1 = require("elysia");
const repositories_1 = require("@/repositories");
const get_user_controller_1 = require("../users/get-user.controller");
async function update_todo(body) {
    await (0, get_user_controller_1.get_user)(body.user_id);
    const data = await (0, repositories_1.update_todo)(body);
    if (!data) {
        throw new elysia_1.NotFoundError("erro ao atualizar tarefa");
    }
    return {
        status: 200,
        message: "tarefas atualizada com sucesso",
        data,
    };
}
exports.update_todo = update_todo;
//# sourceMappingURL=update-todo.controller.js.map