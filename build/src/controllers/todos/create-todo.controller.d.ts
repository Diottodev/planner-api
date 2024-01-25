import { TCreateTodo } from "@/schemas";
export declare function create_todo(body: TCreateTodo): Promise<{
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
//# sourceMappingURL=create-todo.controller.d.ts.map