"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authentication = void 0;
const set_jwt_cookie_1 = require("./set-jwt-cookie");
const controllers_1 = require("@/controllers");
const authentication = (app) => app.use(set_jwt_cookie_1.set_jwt_cookie).derive(async ({ cookie, jwt, set }) => {
    const getCurrentUser = async () => {
        const payload = await jwt.verify(cookie.auth);
        if (!payload) {
            set.status = 401;
            throw new Error("não autorizado");
        }
        return payload;
    };
    if (!(cookie === null || cookie === void 0 ? void 0 : cookie.auth)) {
        set.status = 401;
        throw new Error("não autorizado");
    }
    const { userId } = await getCurrentUser();
    if (!userId) {
        set.status = 401;
        throw new Error("não autorizado");
    }
    const user = await (0, controllers_1.get_user)(userId);
    if (!user) {
        set.status = 401;
        throw new Error("não autorizado");
    }
    return {
        user,
    };
});
exports.authentication = authentication;
//# sourceMappingURL=authentication.js.map