const cards = [{ title: 'Robe', size: '36 mois', price: '99 €', fontCalc: 22 }];
export const prerender = true;

export const load = () => {
	return { cards };
};
