"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_user_router = void 0;
const controllers_1 = require("@/controllers");
const user_schema_1 = require("@/schemas/users/user.schema");
const create_user_router = (app) => app.post("/api/users/account/create", async ({ body }) => await (0, controllers_1.create_user)(body), {
    body: user_schema_1.CreateUserSchema,
});
exports.create_user_router = create_user_router;
//# sourceMappingURL=create-user.route.js.map