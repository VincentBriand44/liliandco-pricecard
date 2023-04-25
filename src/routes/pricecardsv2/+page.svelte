<script>
	import image from '../../assets/img/logo.png';
	import qrcode from '../../assets/img/qrcode.png';

	export let data;
	let cards = data.cards;

	let pages = [undefined];

	const handleChangeTitle = (e) => {
		const { name, value } = e.currentTarget;
		const newCard = [...cards];
		newCard[name].title = value;
		newCard[name].fontCalc = 26 - value.length;
		cards = newCard;
	};

	const handleChangeSize = (e) => {
		const { name, value } = e.currentTarget;
		const newCard = [...cards];
		newCard[name].size = value;
		cards = newCard;
	};

	const handleChangePrice = (e) => {
		const { name, value } = e.currentTarget;
		const newCard = [...cards];
		newCard[name].price = value;
		cards = newCard;
	};

	const handleRemove = (i) => {
		const newCard = [...cards];
		newCard.splice(i, 1);
		cards = newCard;
		pagesReload();
	};

	const handleAdd = () => {
		cards = [...cards, { title: 'Robe', size: '36 mois', price: '99 €', fontCalc: 22 }];
		pagesReload();
	};

	const pagesReload = () => {
		pages = Array(Math.trunc(cards.length / 12) + 1).fill(undefined);
	};
</script>

<section class={cards.length % 12 === 0 ? 'remove-page' : ''}>
	{#each pages as _, numPage}
		<div class="page">
			{#each cards as { title, size, fontCalc, price }, i}
				{#if i >= numPage * 12 && i < (numPage + 1) * 12 && i < cards.length}
					<div class="card">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div class="remove" on:click={() => handleRemove(i)}>X</div>
						<input
							style={`font-size: ${fontCalc > 7 ? fontCalc : 7}px`}
							type="text"
							name={i}
							value={title}
							on:change={handleChangeTitle}
						/>
						<input class="h2" type="text" name={i} value={size} on:change={handleChangeSize} />
						<input class="price" type="text" name={i} value={price} on:change={handleChangePrice} />
						<img src={image} alt="logo" draggable="false" />
						<h2>Conseils d'entretien</h2>
						<div class="after" />
						<img src={qrcode} class="qrcode" alt="logo" draggable="false" />
					</div>
				{/if}
			{/each}
			{#if numPage === pages.length - 1}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="add" on:click={handleAdd}>+</div>
			{/if}
		</div>
	{/each}
</section>

<style>
	@font-face {
		font-family: lightLemonMilk;
		src: url('/src/assets/fonts/LEMONMILK-Light.otf');
	}

	@font-face {
		font-family: mediumLemonMilk;
		src: url('/src/assets/fonts/LEMONMILK-Medium.otf');
	}

	:global(html) {
		margin: 0;
		box-sizing: border-box;
		background: #e4e4e4;
		font-family: mediumLemonMilk;
		user-select: none;
	}

	input {
		font-family: inherit;
		text-align: center;
		color: #bb8f77;
		letter-spacing: 2px;
		width: 100%;
		background: none;
		border: none;
	}

	input.h2 {
		font-size: 0.5em;
		line-height: 0.5em;
		font-family: lightLemonMilk;
	}

	input.price {
		position: absolute;
		font-size: 0.7em;
		width: 40%;
		top: 30%;
		right: 0;
	}

	img {
		height: 165px;
		margin-top: 8px;
		width: initial;
		object-fit: contain;
	}

	h2 {
		box-sizing: border-box;
		font-size: 0.35rem;
		line-height: 0.35rem;
		font-family: mediumLemonMilk;
		text-align: center;
		font-weight: 200;
		color: #aca2a3;
		letter-spacing: 2px;
		width: 80%;
		margin: 12px 10% 0;
		padding: 0.25rem 1rem;
		background: none;
		border: none;
		border-radius: 0.5rem;
	}

	.after {
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 0.25rem 0.25rem 0 0.25rem;
		border-color: #bb8f77 transparent transparent transparent;
		margin-left: 50%;
		transform: translateX(-50%);
	}

	.page {
		width: 21cm;
		height: 29.7cm;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(3, 1fr);

		background: #fff;
		margin: 0 auto;
		margin-bottom: 0.5cm;
		box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);

		/* découpe */
		border-left: dashed 1px #00000020;
		border-top: dashed 1px #00000020;
	}

	.card {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: end;
		padding-bottom: 2mm;
		max-height: calc(29.7cm / 3);

		/* découpe */
		border-right: dashed 1px #00000020;
		border-bottom: dashed 1px #00000020;
	}

	.qrcode {
		margin: 4px 0 6px;
		height: 75px;
	}

	.remove {
		font-weight: bold;
		position: absolute;
		top: 5px;
		right: 5px;
		color: #d40015;
		cursor: pointer;
	}

	.add {
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: bold;
		font-size: 80px;
		color: #00a300;
		cursor: pointer;
	}

	@media print {
		:global(body),
		.page {
			margin: 0;
			box-shadow: 0;
			margin-bottom: 2mm;
		}

		.remove,
		.add {
			display: none;
		}

		.remove-page .page:last-child {
			display: none;
		}
	}
</style>
