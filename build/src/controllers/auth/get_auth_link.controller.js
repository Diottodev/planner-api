"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_auth_link = void 0;
const elysia_1 = require("elysia");
const repositories_1 = require("@/repositories");
async function get_auth_link(code) {
    const data = await (0, repositories_1.get_auth_link)(code);
    if (!data) {
        throw new elysia_1.NotFoundError("sem link de autenticação");
    }
    return {
        status: 200,
        message: "autenticado",
        data,
    };
}
exports.get_auth_link = get_auth_link;
//# sourceMappingURL=get_auth_link.controller.js.map