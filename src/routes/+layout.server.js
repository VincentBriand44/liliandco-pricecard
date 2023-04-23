const menu = [
	{ title: 'Price Cards', link: '/pricecards' },
	{ title: 'Big Cards', link: '/bigcards' }
];
export const prerender = true;

export const load = () => {
	return { menu };
};
