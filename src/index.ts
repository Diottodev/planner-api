import { Elysia } from "elysia";
import { create_user_router } from "./routers";

const app = new Elysia()
	.use(create_user_router)
	.get("/", () => "Hello")
	.listen(3000);

console.log(
	`🦊 Server is running at ${app.server?.hostname}:${app.server?.port}`,
);

export type APP = typeof app;
