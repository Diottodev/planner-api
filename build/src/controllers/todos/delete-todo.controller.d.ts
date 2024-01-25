export declare function delete_todo(user_id: string, id: string): Promise<{
    status: number;
    message: string;
    data: {
        completed: "new" | "doing" | "completed" | null;
        id: string;
        title: string;
        description: string;
        important: boolean | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: string | null;
    };
}>;
//# sourceMappingURL=delete-todo.controller.d.ts.map