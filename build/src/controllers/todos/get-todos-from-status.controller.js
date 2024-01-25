"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_todos_from_status = void 0;
const elysia_1 = require("elysia");
const repositories_1 = require("@/repositories");
const get_user_controller_1 = require("../users/get-user.controller");
async function get_todos_from_status(user_id, status, important) {
    await (0, get_user_controller_1.get_user)(user_id);
    const data = await (0, repositories_1.get_todos_from_status)(user_id, status, important);
    if (!data) {
        throw new elysia_1.NotFoundError("tarefas não encontradas");
    }
    const translate_status = {
        new: "novas",
        doing: "em andamento",
        completed: "completadas",
    };
    return {
        status: 200,
        message: `tarefas ${translate_status[status]} ${important === true ? "importantes" : ""} encontradas com sucesso`,
        data,
    };
}
exports.get_todos_from_status = get_todos_from_status;
//# sourceMappingURL=get-todos-from-status.controller.js.map