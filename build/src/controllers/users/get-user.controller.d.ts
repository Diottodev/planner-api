export declare function get_user(id: string): Promise<{
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
//# sourceMappingURL=get-user.controller.d.ts.map