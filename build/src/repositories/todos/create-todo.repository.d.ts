import { TCreateTodo } from "@/schemas";
export declare function create_todo(values: TCreateTodo): Promise<{
    completed: "new" | "doing" | "completed" | null;
    id: string;
    title: string;
    description: string;
    important: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
} | undefined>;
//# sourceMappingURL=create-todo.repository.d.ts.map