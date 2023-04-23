const cards = [{ title: 'title', size: '3/6 mois', price: '10 €', fontCalc: 21 }];
export const prerender = true;

export const load = () => {
	return { cards };
};
