type EmailOptions = {
	email: string;
	subject?: string;
	html: string;
};

export const email_options = ({ email, html, subject }: EmailOptions) => ({
	from: `Pannel <${process.env.GMAIL_USER}>`,
	to: email,
	subject,
	html,
});
