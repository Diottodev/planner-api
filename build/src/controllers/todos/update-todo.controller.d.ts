import { TTodo } from "@/schemas";
export declare function update_todo(body: TTodo): Promise<{
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
//# sourceMappingURL=update-todo.controller.d.ts.map