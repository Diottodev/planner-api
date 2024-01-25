"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth_links_authenticate = void 0;
const authentication_1 = require("./authentication");
const set_jwt_cookie_1 = require("./set-jwt-cookie");
const get_auth_link_controller_1 = require("@/controllers/auth/get_auth_link.controller");
const auth_links_authenticate = (app) => app
    .use(set_jwt_cookie_1.set_jwt_cookie)
    .get("/api/auth-links/authenticate", async ({ query, set, jwt, setCookie }) => {
    const code = query.code;
    const user_id_from_code = await (0, get_auth_link_controller_1.get_auth_link)(code || "");
    if (user_id_from_code.status !== 200) {
        set.status = 401;
        throw new Error("não autorizado");
    }
    const user_id = user_id_from_code.data.user_id;
    const auth = await jwt.sign({
        userId: user_id,
    });
    setCookie("auth", auth, {
        maxAge: 7 * 86400,
        path: "/",
    });
    set.redirect = query.redirect;
})
    .use(authentication_1.authentication)
    .get("/pannel", async ({ user, set }) => {
    if (!user) {
        set.status = 401;
        throw new Error("não autorizado");
    }
    return {
        status: 200,
        message: "logado com sucesso",
        data: user,
    };
});
exports.auth_links_authenticate = auth_links_authenticate;
//# sourceMappingURL=auth-links-authenticate.js.map