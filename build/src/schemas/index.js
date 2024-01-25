"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.CreateUserSchema = exports.TodoSchema = exports.CreateTodoSchema = exports.JwtPayloadSchema = exports.EmailAuthSchema = void 0;
var email_auth_schema_1 = require("./email/email-auth.schema");
Object.defineProperty(exports, "EmailAuthSchema", { enumerable: true, get: function () { return email_auth_schema_1.EmailAuthSchema; } });
var jwt_schema_1 = require("./jwt/jwt.schema");
Object.defineProperty(exports, "JwtPayloadSchema", { enumerable: true, get: function () { return jwt_schema_1.JwtPayloadSchema; } });
var todos_schema_1 = require("./todos/todos.schema");
Object.defineProperty(exports, "CreateTodoSchema", { enumerable: true, get: function () { return todos_schema_1.CreateTodoSchema; } });
Object.defineProperty(exports, "TodoSchema", { enumerable: true, get: function () { return todos_schema_1.TodoSchema; } });
var user_schema_1 = require("./users/user.schema");
Object.defineProperty(exports, "CreateUserSchema", { enumerable: true, get: function () { return user_schema_1.CreateUserSchema; } });
Object.defineProperty(exports, "UserSchema", { enumerable: true, get: function () { return user_schema_1.UserSchema; } });
//# sourceMappingURL=index.js.map