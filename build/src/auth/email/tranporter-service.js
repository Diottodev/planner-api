"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tranporter_service = void 0;
const nodemailer_1 = require("nodemailer");
exports.tranporter_service = (0, nodemailer_1.createTransport)({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});
//# sourceMappingURL=tranporter-service.js.map