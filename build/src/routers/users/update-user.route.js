"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update_user_router = void 0;
const controllers_1 = require("@/controllers");
const user_schema_1 = require("@/schemas/users/user.schema");
const update_user_router = (app) => app.put("/api/users/account/update/:id", async ({ body, params }) => {
    const body_user = { ...body, id: params.id };
    return await (0, controllers_1.update_user)(body_user);
}, {
    body: user_schema_1.UserSchema,
    params: user_schema_1.GetUserSchema,
});
exports.update_user_router = update_user_router;
//# sourceMappingURL=update-user.route.js.map