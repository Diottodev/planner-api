import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import * as schema from "./schemas/index";

const db_connection = postgres(process.env.DATABASE_URL as string, {
	database: process.env.DATABASE_USER,
	username: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASS,
});

export const db = drizzle(db_connection, { schema });
await migrate(drizzle(db_connection), { migrationsFolder: "drizzle" });
