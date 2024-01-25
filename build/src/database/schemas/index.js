"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.user_relations = exports.todos_relations = exports.todos = exports.completed_enum = exports.auth_links_relations = exports.auth_links = void 0;
var auth_links_drizzle_1 = require("./auth/auth-links.drizzle");
Object.defineProperty(exports, "auth_links", { enumerable: true, get: function () { return auth_links_drizzle_1.auth_links; } });
Object.defineProperty(exports, "auth_links_relations", { enumerable: true, get: function () { return auth_links_drizzle_1.auth_links_relations; } });
var todos_drizzle_1 = require("./todos/todos.drizzle");
Object.defineProperty(exports, "completed_enum", { enumerable: true, get: function () { return todos_drizzle_1.completed_enum; } });
Object.defineProperty(exports, "todos", { enumerable: true, get: function () { return todos_drizzle_1.todos; } });
Object.defineProperty(exports, "todos_relations", { enumerable: true, get: function () { return todos_drizzle_1.todos_relations; } });
var users_drizzle_1 = require("./users/users.drizzle");
Object.defineProperty(exports, "user_relations", { enumerable: true, get: function () { return users_drizzle_1.user_relations; } });
Object.defineProperty(exports, "users", { enumerable: true, get: function () { return users_drizzle_1.users; } });
//# sourceMappingURL=index.js.map