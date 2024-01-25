export declare function get_todos_from_status(user_id: string, status: "new" | "doing" | "completed", important?: boolean): Promise<{
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
    }[];
}>;
//# sourceMappingURL=get-todos-from-status.controller.d.ts.map