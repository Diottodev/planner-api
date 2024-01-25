import { TCreateUser } from "@/schemas/users/user.schema";
export declare function create_user(body: TCreateUser): Promise<{
    status: number;
    message: string;
    data: {
        id: string;
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        email: string;
        photo: string | null;
    };
}>;
//# sourceMappingURL=create-user.controller.d.ts.map