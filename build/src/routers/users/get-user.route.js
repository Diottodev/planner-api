"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_user_router = void 0;
const controllers_1 = require("@/controllers");
const user_schema_1 = require("@/schemas/users/user.schema");
const get_user_router = (app) => app.get("/api/users/get/:id", async ({ params }) => await (0, controllers_1.get_user)(params.id), {
    params: user_schema_1.GetUserSchema,
});
exports.get_user_router = get_user_router;
//# sourceMappingURL=get-user.route.js.map