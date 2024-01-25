"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_todos = void 0;
const elysia_1 = require("elysia");
const repositories_1 = require("@/repositories");
const get_user_controller_1 = require("../users/get-user.controller");
async function get_todos(user_id) {
    await (0, get_user_controller_1.get_user)(user_id);
    const data = await (0, repositories_1.get_todos)(user_id);
    if (!data) {
        throw new elysia_1.NotFoundError("tarefas não encontradas");
    }
    return {
        status: 200,
        message: "tarefas encontradas com sucesso",
        data,
    };
}
exports.get_todos = get_todos;
//# sourceMappingURL=get-todos.controller.js.map