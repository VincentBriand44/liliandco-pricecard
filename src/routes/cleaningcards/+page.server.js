const cards = Array(19).fill({ title: "Conseil d'entretien" });
export const prerender = true;

export const load = () => {
	return { cards };
};
