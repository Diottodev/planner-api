"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailAuthSchema = void 0;
const elysia_1 = require("elysia");
exports.EmailAuthSchema = elysia_1.t.Object({
    email: elysia_1.t.String({
        format: "email",
        error: "email invalido :(",
    }),
    name: elysia_1.t.String(),
});
//# sourceMappingURL=email-auth.schema.js.map