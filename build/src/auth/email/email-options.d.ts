type EmailOptions = {
    email: string;
    subject?: string;
    html: string;
};
export declare const email_options: ({ email, html, subject }: EmailOptions) => {
    from: string;
    to: string;
    subject: string | undefined;
    html: string;
};
export {};
//# sourceMappingURL=email-options.d.ts.map