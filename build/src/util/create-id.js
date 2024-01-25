"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_id = void 0;
const create_id = () => {
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    const length = 32;
    return Array.from({ length }, () => char.charAt(Math.floor(Math.random() * char.length))).join("");
};
exports.create_id = create_id;
//# sourceMappingURL=create-id.js.map