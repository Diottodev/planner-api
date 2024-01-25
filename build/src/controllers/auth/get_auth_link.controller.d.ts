export declare function get_auth_link(code: string): Promise<{
    status: number;
    message: string;
    data: {
        user_id: string | null;
        code: string | null;
    };
}>;
//# sourceMappingURL=get_auth_link.controller.d.ts.map