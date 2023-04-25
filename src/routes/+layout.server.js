const menu = [
	{ title: 'Price Cards', link: '/pricecards' },
	{ title: 'Price Cards v2', link: '/pricecardsv2' },
	{ title: 'Big Cards', link: '/bigcards' },
	{ title: 'Cleaning Cards', link: '/cleaningcards' }
];
export const prerender = true;

export const load = () => {
	return { menu };
};
