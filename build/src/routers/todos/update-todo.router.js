"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update_todo_router = void 0;
const controllers_1 = require("@/controllers");
const schemas_1 = require("@/schemas");
const authentication_1 = require("../auth/authentication");
const update_todo_router = (app) => app.use(authentication_1.authentication).put("/api/todos/update/:userId/:id", async ({ body, params, user, set }) => {
    if (!user) {
        set.status = 401;
        throw new Error("não autorizado");
    }
    const data = { ...body, id: params.id, user_id: params.userId };
    return await (0, controllers_1.update_todo)(data);
}, {
    body: schemas_1.TodoSchema,
});
exports.update_todo_router = update_todo_router;
//# sourceMappingURL=update-todo.router.js.map