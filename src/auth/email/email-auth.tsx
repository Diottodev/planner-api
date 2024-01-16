import * as React from "react";
import {
	Body,
	Button,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Section,
	Tailwind,
	Text,
} from "@react-email/components";

type EmailTemplateProps = {
	preview: string;
	name: string;
	email: string;
	url: string;
};

export default function email_auth({
	name,
	preview,
	email,
	url,
}: EmailTemplateProps) {
	return (
		// biome-ignore lint/a11y/useHtmlLang: <explanation>
		<html>
			<Preview>{preview}</Preview>
			<Tailwind>
				<body className="bg-white my-auto mx-auto font-sans">
					<Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
						<Section className="mt-[32px]">
							<Img
								src="https://assets-tau-virid.vercel.app/pannel-logo.jpg"
								width="40"
								height="37"
								alt="Pannel"
								className="my-0 mx-auto"
							/>
						</Section>
						<Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
							Faça login no <strong>PANNEL</strong>
						</Heading>
						<Text className="text-black text-[14px] leading-[24px]">
							Olá {name}, você solicitou um link para login no (
							<Link
								href={"mailto:panneltodos@gmail.com"}
								className="text-blue-600 no-underline"
							>
								pannel
							</Link>
							) todos através do email {email}
						</Text>

						<Section className="text-center mt-[32px] mb-[14px]">
							<Button
								className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
								href={url}
							>
								Entrar agora
							</Button>
						</Section>
						<Section>
							<Text className="text-black text-[14px] leading-[24px]">
								Ou copie a ulr abaixo no seu browser: {url}
							</Text>
						</Section>
						<Hr />
						<Section>
							<Text className="text-black text-[12px]">
								se você não solicitou esse link de autenticação, apenas descarte
								esse email.
							</Text>
						</Section>
					</Container>
				</body>
			</Tailwind>
		</html>
	);
}
