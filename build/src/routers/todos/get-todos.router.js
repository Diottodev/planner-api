"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_todos_router = void 0;
const controllers_1 = require("@/controllers");
const authentication_1 = require("../auth/authentication");
const get_todos_router = (app) => app
    .use(authentication_1.authentication)
    .get("/api/todos/get/:userId", async ({ params, user, set }) => {
    if (!user) {
        set.status = 401;
        throw new Error("não autorizado");
    }
    return await (0, controllers_1.get_todos)(params.userId);
});
exports.get_todos_router = get_todos_router;
//# sourceMappingURL=get-todos.router.js.map