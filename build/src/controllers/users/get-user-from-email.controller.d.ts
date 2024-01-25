export declare function get_user_from_email(email: string): Promise<{
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
//# sourceMappingURL=get-user-from-email.controller.d.ts.map