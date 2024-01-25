"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.send_email_auth_router = void 0;
const auth_1 = require("@/auth");
const get_user_from_email_controller_1 = require("@/controllers/users/get-user-from-email.controller");
const db_1 = require("@/database/db");
const schemas_1 = require("@/database/schemas");
const email_auth_schema_1 = require("@/schemas/email/email-auth.schema");
const create_id_1 = require("@/util/create-id");
const elysia_1 = require("elysia");
const env = process.env;
const send_email_auth_router = (app) => app.post("/api/users/auth", async ({ body }) => {
    const user_from_email = await (0, get_user_from_email_controller_1.get_user_from_email)(body.email);
    const auth_id = (0, create_id_1.create_id)();
    await db_1.db
        .insert(schemas_1.auth_links)
        .values({ code: auth_id, user_id: user_from_email.data.id });
    const auth_link = new URL("/api/auth-links/authenticate", env.API_BASE_URL);
    auth_link.searchParams.set("code", auth_id);
    auth_link.searchParams.set("redirect", env.AUTH_REDIRECT_API);
    const html = (0, auth_1.convert_react_to_html)(user_from_email.data.name, "Confira o link de autenticação", body.email, auth_link.toString());
    const options = {
        email: body.email,
        subject: "Atentique seu email",
        html,
    };
    try {
        const data = await auth_1.tranporter_service.sendMail((0, auth_1.email_options)(options));
        if (data.accepted.includes(body.email)) {
            return {
                status: 200,
                message: `email enviado com sucesso para: ${body.email}`,
                data,
            };
        }
    }
    catch (error) {
        throw new elysia_1.NotFoundError("Ocorreu um erro ao enviar o email");
    }
}, { body: email_auth_schema_1.EmailAuthSchema });
exports.send_email_auth_router = send_email_auth_router;
//# sourceMappingURL=send-email-auth.route.js.map