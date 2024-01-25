import { TTodo } from "@/schemas";
export declare function update_todo(values: TTodo): Promise<{
    completed: "new" | "doing" | "completed" | null;
    id: string;
    title: string;
    description: string;
    important: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
} | undefined>;
//# sourceMappingURL=update-todo.repository.d.ts.map