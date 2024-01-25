"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const elysia_1 = require("elysia");
const routers_1 = require("@/routers");
const cors_1 = __importDefault(require("@elysiajs/cors"));
const server = new elysia_1.Elysia()
    .get("/", () => {
    return new Response("🦊 Server is running");
})
    .onError(({ error, set }) => {
    return {
        status: set.status,
        message: error.message,
    };
})
    .use((0, cors_1.default)({
    origin: "*",
}))
    .use(routers_1.create_user_router)
    .use(routers_1.get_user_router)
    .use(routers_1.update_user_router)
    .use(routers_1.send_email_auth_router)
    .use(routers_1.auth_links_authenticate)
    .use(routers_1.create_todo_router)
    .use(routers_1.get_todo_router)
    .use(routers_1.get_todos_router)
    .use(routers_1.get_todos_from_status_router)
    .use(routers_1.update_todo_router)
    .use(routers_1.delete_todo_router)
    .listen(3000);
console.log(`🦊 Server is running at ${(_a = server === null || server === void 0 ? void 0 : server.server) === null || _a === void 0 ? void 0 : _a.url}`);
//# sourceMappingURL=server.js.map