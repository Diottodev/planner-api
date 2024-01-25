"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_todo_router = void 0;
const controllers_1 = require("@/controllers");
const authentication_1 = require("../auth/authentication");
const get_todo_router = (app) => app
    .use(authentication_1.authentication)
    .get("/api/todos/get/:userId/:id", async ({ params, user, set }) => {
    if (!user) {
        set.status = 401;
        throw new Error("não autorizado");
    }
    return await (0, controllers_1.get_todo)(params.userId, params.id);
});
exports.get_todo_router = get_todo_router;
//# sourceMappingURL=get-todo.router.js.map