export declare const auth_links: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "auth_links";
    schema: undefined;
    columns: {
        code: import("drizzle-orm/pg-core").PgColumn<{
            name: "code";
            tableName: "auth_links";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        user_id: import("drizzle-orm/pg-core").PgColumn<{
            name: "user_id";
            tableName: "auth_links";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const auth_links_relations: import("drizzle-orm").Relations<"auth_links", {
    author: import("drizzle-orm").One<"users", false>;
}>;
//# sourceMappingURL=auth-links.drizzle.d.ts.map