const menu = [
	{ title: 'Price Cards', link: '/pricecards' },
	{ title: 'Autre', link: '/other' }
];
export const prerender = true;

export const load = () => {
	return { menu };
};
