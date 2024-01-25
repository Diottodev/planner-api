export declare function delete_todo(id: string): Promise<{
    completed: "new" | "doing" | "completed" | null;
    id: string;
    title: string;
    description: string;
    important: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
} | undefined>;
//# sourceMappingURL=delete-todo.repository.d.ts.map