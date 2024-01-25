"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert_react_to_html = void 0;
const react_1 = __importDefault(require("react"));
const server_1 = __importDefault(require("react-dom/server"));
const email_auth_1 = __importDefault(require("./email-auth"));
const convert_react_to_html = (name, preview, email, url) => {
    const html = server_1.default.renderToString(react_1.default.createElement(email_auth_1.default, { name, preview, email, url }));
    return `<!DOCTYPE html>${html}`;
};
exports.convert_react_to_html = convert_react_to_html;
//# sourceMappingURL=convert-to-html.js.map