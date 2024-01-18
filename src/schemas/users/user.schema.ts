import { t, Static as s } from "elysia";
import { createInsertSchema, createSelectSchema } from "drizzle-typebox";
import { users } from "@/database/schemas";

export const GetUserSchema = t.Object({ id: t.String() });

export const CreateUserSchema = createInsertSchema(users);

export const UserSchema = createSelectSchema(users);

export type TCreateUser = s<typeof CreateUserSchema>;
export type TUser = s<typeof UserSchema>;
