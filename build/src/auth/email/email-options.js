"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.email_options = void 0;
const email_options = ({ email, html, subject }) => ({
    from: `Pannel <${process.env.GMAIL_USER}>`,
    to: email,
    subject,
    html,
});
exports.email_options = email_options;
//# sourceMappingURL=email-options.js.map