import { TCreateUser } from "@/schemas";
export declare function create_user(values: TCreateUser): Promise<{
    id: string;
    name: string;
    created_at: Date | null;
    updated_at: Date | null;
    email: string;
    photo: string | null;
} | undefined>;
//# sourceMappingURL=create-user.repository.d.ts.map