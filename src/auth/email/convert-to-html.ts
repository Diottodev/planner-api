import React from "react";
import ReactDOMServer from "react-dom/server";
import email_auth from "./email-auth";

export const convert_react_to_html = (
	name: string,
	preview: string,
	email: string,
	url: string,
) => {
	const html = ReactDOMServer.renderToString(
		React.createElement(email_auth, { name, preview, email, url }),
	);
	return `<!DOCTYPE html>${html}`;
};
