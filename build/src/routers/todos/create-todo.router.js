"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_todo_router = void 0;
const controllers_1 = require("@/controllers");
const schemas_1 = require("@/schemas");
const authentication_1 = require("../auth/authentication");
const create_todo_router = (app) => app.use(authentication_1.authentication).post("/api/todos/create/:userId", async ({ body, params, user, set }) => {
    if (!user) {
        set.status = 401;
        throw new Error("não autorizado");
    }
    const data = { ...body, user_id: params.userId };
    return await (0, controllers_1.create_todo)(data);
}, {
    body: schemas_1.CreateTodoSchema,
});
exports.create_todo_router = create_todo_router;
//# sourceMappingURL=create-todo.router.js.map