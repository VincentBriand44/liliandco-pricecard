const menu = [
	{ title: 'Price Cards', link: '/pricecards' },
	{ title: 'Big Cards', link: '/bigcards' },
	{ title: 'Cleaning Cards', link: '/cleaningcards' },
	{ title: 'Price Cards v2', link: '/pricecardsv2' }
];
export const prerender = true;

export const load = () => {
	return { menu };
};
