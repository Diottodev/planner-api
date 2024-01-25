"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryTodos = exports.TodoSchema = exports.CreateTodoSchema = exports.EComplet = void 0;
const elysia_1 = require("elysia");
const drizzle_typebox_1 = require("drizzle-typebox");
const schemas_1 = require("@/database/schemas");
var EComplet;
(function (EComplet) {
    EComplet["new"] = "new";
    EComplet["doing"] = "doing";
    EComplet["completed"] = "completed";
})(EComplet = exports.EComplet || (exports.EComplet = {}));
exports.CreateTodoSchema = (0, drizzle_typebox_1.createInsertSchema)(schemas_1.todos);
exports.TodoSchema = (0, drizzle_typebox_1.createSelectSchema)(schemas_1.todos);
exports.QueryTodos = elysia_1.t.Object({
    status: elysia_1.t.Optional(elysia_1.t.Enum(EComplet)),
    important: elysia_1.t.Optional(elysia_1.t.String()),
});
//# sourceMappingURL=todos.schema.js.map