<script>
	import image from '../../assets/img/logo.png';

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
		cards = [...cards, { title: 'title', size: '3/6 mois', price: '10€', fontCalc: 21 }];
		pagesReload();
	};

	const pagesReload = () => {
		pages = Array(Math.trunc(cards.length / 20) + 1).fill(undefined);
	};
</script>

<section class={cards.length % 20 === 0 ? 'remove-page' : ''}>
	{#each pages as _, numPage}
		<div class="page">
			{#each cards as { title, size, fontCalc, price }, i}
				{#if i >= numPage * 20 && i < (numPage + 1) * 20 && i < cards.length}
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
		color: #aca2a3;
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
		top: 40%;
		right: 0;
	}

	img {
		height: 140px;
		width: initial;
		object-fit: contain;
	}

	.page {
		width: 21cm;
		height: 29.7cm;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(5, 1fr);

		background: #fff;
		margin: 0 auto;
		margin-bottom: 0.5cm;
		box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);

		/* découpe */
		border-left: dashed 1px #00000005;
		border-top: dashed 1px #00000005;
	}

	.card {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: end;
		padding-bottom: 2mm;
		max-height: calc(29.7cm / 5);

		/* découpe */
		border-right: dashed 1px #00000005;
		border-bottom: dashed 1px #00000005;
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
