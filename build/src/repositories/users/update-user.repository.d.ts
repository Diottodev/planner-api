import { TUser } from "@/schemas";
export declare function update_user(values: TUser): Promise<{
    id: string;
    name: string;
    created_at: Date | null;
    updated_at: Date | null;
    email: string;
    photo: string | null;
} | undefined>;
//# sourceMappingURL=update-user.repository.d.ts.map