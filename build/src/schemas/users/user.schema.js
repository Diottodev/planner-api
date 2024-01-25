"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.CreateUserSchema = exports.GetUserSchema = void 0;
const elysia_1 = require("elysia");
const drizzle_typebox_1 = require("drizzle-typebox");
const schemas_1 = require("@/database/schemas");
exports.GetUserSchema = elysia_1.t.Object({ id: elysia_1.t.String() });
exports.CreateUserSchema = (0, drizzle_typebox_1.createInsertSchema)(schemas_1.users);
exports.UserSchema = (0, drizzle_typebox_1.createSelectSchema)(schemas_1.users);
//# sourceMappingURL=user.schema.js.map