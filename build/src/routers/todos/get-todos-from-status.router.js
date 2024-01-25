"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_todos_from_status_router = void 0;
const controllers_1 = require("@/controllers");
const todos_schema_1 = require("@/schemas/todos/todos.schema");
const authentication_1 = require("../auth/authentication");
const get_todos_from_status_router = (app) => app.use(authentication_1.authentication).get("/api/todos/getStatus/:userId", async ({ params, query, user, set }) => {
    if (!user) {
        set.status = 401;
        throw new Error("não autorizado");
    }
    return await (0, controllers_1.get_todos_from_status)(params.userId, query.status, Boolean(query.important));
}, {
    query: todos_schema_1.QueryTodos,
});
exports.get_todos_from_status_router = get_todos_from_status_router;
//# sourceMappingURL=get-todos-from-status.router.js.map