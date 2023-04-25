const cards = Array(3).fill({});
export const prerender = true;

export const load = () => {
	return { cards };
};
