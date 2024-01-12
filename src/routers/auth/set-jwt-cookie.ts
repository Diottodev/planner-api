import { JwtPayloadSchema } from "@/schemas/jwt/jwt.schema";
import cookie from "@elysiajs/cookie";
import jwt from "@elysiajs/jwt";
import Elysia from "elysia";

export const set_jwt_cookie = (app: Elysia) =>
	app
		.use(
			jwt({
				name: "jwt",
				secret: process.env.JWT_SECRET_KEY as string,
				schema: JwtPayloadSchema,
			}),
		)
		.use(cookie());
