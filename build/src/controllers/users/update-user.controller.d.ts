import { TUser } from "@/schemas/users/user.schema";
export declare function update_user(body: TUser): Promise<{
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
//# sourceMappingURL=update-user.controller.d.ts.map