"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const components_1 = require("@react-email/components");
function email_auth({ name, preview, email, url, }) {
    return (
    // biome-ignore lint/a11y/useHtmlLang: <explanation>
    <html>
			<components_1.Preview>{preview}</components_1.Preview>
			<components_1.Tailwind>
				<body className="bg-white my-auto mx-auto font-sans">
					<components_1.Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
						<components_1.Section className="mt-[32px]">
							<components_1.Img src="https://assets-tau-virid.vercel.app/pannel-logo.jpg" width="40" height="37" alt="Pannel" className="my-0 mx-auto"/>
						</components_1.Section>
						<components_1.Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
							Faça login no <strong>PANNEL</strong>
						</components_1.Heading>
						<components_1.Text className="text-black text-[14px] leading-[24px]">
							Olá {name}, você solicitou um link para login no (
							<components_1.Link href={"mailto:panneltodos@gmail.com"} className="text-blue-600 no-underline">
								pannel
							</components_1.Link>
							) todos através do email {email}
						</components_1.Text>

						<components_1.Section className="text-center mt-[32px] mb-[14px]">
							<components_1.Button className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3" href={url}>
								Entrar agora
							</components_1.Button>
						</components_1.Section>
						<components_1.Section>
							<components_1.Text className="text-black text-[14px] leading-[24px]">
								Ou copie a ulr abaixo no seu browser: {url}
							</components_1.Text>
						</components_1.Section>
						<components_1.Hr />
						<components_1.Section>
							<components_1.Text className="text-black text-[12px]">
								se você não solicitou esse link de autenticação, apenas descarte
								esse email.
							</components_1.Text>
						</components_1.Section>
					</components_1.Container>
				</body>
			</components_1.Tailwind>
		</html>);
}
exports.default = email_auth;
//# sourceMappingURL=email-auth.js.map