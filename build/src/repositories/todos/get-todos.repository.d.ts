export declare function get_todos(user_id: string): Promise<{
    completed: "new" | "doing" | "completed" | null;
    id: string;
    title: string;
    description: string;
    important: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
}[]>;
//# sourceMappingURL=get-todos.repository.d.ts.map