import { t, Static as s } from "elysia";

export const JwtPayloadSchema = t.Object({
	userId: t.String(),
});

export type TJwtPayload = s<typeof JwtPayloadSchema>;
