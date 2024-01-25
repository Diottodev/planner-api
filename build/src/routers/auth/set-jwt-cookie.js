"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.set_jwt_cookie = void 0;
const jwt_schema_1 = require("@/schemas/jwt/jwt.schema");
const cookie_1 = __importDefault(require("@elysiajs/cookie"));
const jwt_1 = __importDefault(require("@elysiajs/jwt"));
const set_jwt_cookie = (app) => app
    .use((0, jwt_1.default)({
    name: "jwt",
    secret: process.env.JWT_SECRET_KEY,
    schema: jwt_schema_1.JwtPayloadSchema,
}))
    .use((0, cookie_1.default)());
exports.set_jwt_cookie = set_jwt_cookie;
//# sourceMappingURL=set-jwt-cookie.js.map