"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_todo = void 0;
const elysia_1 = require("elysia");
const repositories_1 = require("@/repositories");
const get_user_controller_1 = require("../users/get-user.controller");
async function delete_todo(user_id, id) {
    await (0, get_user_controller_1.get_user)(user_id);
    const data = await (0, repositories_1.delete_todo)(id);
    if (!data) {
        throw new elysia_1.NotFoundError("tarefa não encontrada");
    }
    return {
        status: 200,
        message: `tarefa ${data.title} deletada com sucesso`,
        data,
    };
}
exports.delete_todo = delete_todo;
//# sourceMappingURL=delete-todo.controller.js.map