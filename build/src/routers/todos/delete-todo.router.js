"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_todo_router = void 0;
const controllers_1 = require("@/controllers");
const authentication_1 = require("../auth/authentication");
const delete_todo_router = (app) => app
    .use(authentication_1.authentication)
    .delete("/api/todos/delete/:userId/:id", async ({ params, user, set }) => {
    if (!user) {
        set.status = 401;
        throw new Error("não autorizado");
    }
    return await (0, controllers_1.delete_todo)(params.userId, params.id);
});
exports.delete_todo_router = delete_todo_router;
//# sourceMappingURL=delete-todo.router.js.map