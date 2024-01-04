export const create_id = () => {
	const char =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
	const length = 16;

	return Array.from({ length }, () =>
		char.charAt(Math.floor(Math.random() * char.length)),
	).join("");
};
