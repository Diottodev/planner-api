"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_user = void 0;
const create_user_repository_1 = require("@/repositories/users/create-user.repository");
const elysia_1 = require("elysia");
const db_1 = require("@/database/db");
async function create_user(body) {
    const user = await db_1.db.query.users.findFirst({
        where: (users, { eq }) => eq(users.email, body.email),
    });
    if (user === null || user === void 0 ? void 0 : user.email) {
        throw new elysia_1.NotFoundError("ops.. email já cadastrado");
    }
    const data = await (0, create_user_repository_1.create_user)(body);
    if (!data) {
        throw new elysia_1.NotFoundError("erro ao cadastrar conta");
    }
    return {
        status: 201,
        message: "conta cadastrada com sucesso",
        data,
    };
}
exports.create_user = create_user;
//# sourceMappingURL=create-user.controller.js.map