import { Static as s } from "elysia";
export declare enum EComplet {
    new = "new",
    doing = "doing",
    completed = "completed"
}
export declare const CreateTodoSchema: import("@sinclair/typebox").TObject<{
    completed: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"new">, import("@sinclair/typebox").TLiteral<"doing">, import("@sinclair/typebox").TLiteral<"completed">]>, import("@sinclair/typebox").TNull]>>;
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    title: import("@sinclair/typebox").TString;
    description: import("@sinclair/typebox").TString;
    important: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TNull]>>;
    created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TNull]>>;
    updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TNull]>>;
    user_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
}>;
export declare const TodoSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    title: import("@sinclair/typebox").TString;
    description: import("@sinclair/typebox").TString;
    important: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TNull]>;
    completed: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"new">, import("@sinclair/typebox").TLiteral<"doing">, import("@sinclair/typebox").TLiteral<"completed">]>, import("@sinclair/typebox").TNull]>;
    created_at: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TNull]>;
    updated_at: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TNull]>;
    user_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
}>;
export declare const QueryTodos: import("@sinclair/typebox").TObject<{
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof EComplet>>;
    important: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type TCompleted = "new" | "doing" | "completed";
export type TTodo = s<typeof TodoSchema>;
export type TCreateTodo = s<typeof CreateTodoSchema>;
//# sourceMappingURL=todos.schema.d.ts.map