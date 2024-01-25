"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_todo = void 0;
const elysia_1 = require("elysia");
const repositories_1 = require("@/repositories");
const get_user_controller_1 = require("../users/get-user.controller");
async function create_todo(body) {
    await (0, get_user_controller_1.get_user)(body.user_id);
    const data = await (0, repositories_1.create_todo)(body);
    if (!data) {
        throw new elysia_1.NotFoundError("erro ao criar tarefa");
    }
    return {
        status: 201,
        message: "tarefa criada com sucesso",
        data,
    };
}
exports.create_todo = create_todo;
//# sourceMappingURL=create-todo.controller.js.map