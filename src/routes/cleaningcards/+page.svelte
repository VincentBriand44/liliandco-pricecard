<script>
	import image from '../../assets/img/qrcode.png';

	export let data;
	let cards = data.cards;

	let pages = [undefined];

	const handleChangeTitle = (e) => {
		const { name, value } = e.currentTarget;
		const newCard = [...cards];
		newCard[name].title = value;
		cards = newCard;
	};

	const handleRemove = (i) => {
		const newCard = [...cards];
		newCard.splice(i, 1);
		cards = newCard;
		pagesReload();
	};

	const handleAdd = () => {
		cards = [...cards, { title: "Conseil d'entretien" }];
		pagesReload();
	};

	const pagesReload = () => {
		pages = Array(Math.trunc(cards.length / 20) + 1).fill(undefined);
	};
</script>

<section class={cards.length % 20 === 0 ? 'remove-page' : ''}>
	{#each pages as _, numPage}
		<div class="page">
			{#each cards as { title }, i}
				{#if i >= numPage * 20 && i < (numPage + 1) * 20 && i < cards.length}
					<div class="card">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div class="remove" on:click={() => handleRemove(i)}>X</div>
						<input type="text" name={i} value={title} on:change={handleChangeTitle} />
						<div class="after" />
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
	input {
		position: relative;
		box-sizing: border-box;
		font-size: 0.5rem;
		font-family: lightLemonMilk;
		text-align: center;
		font-weight: 200;
		color: #ffffff;
		letter-spacing: 2px;
		width: 80%;
		margin: 0 10%;
		padding: 0.5rem 1rem;
		background: none;
		border: none;
		background-color: #bb8f77;
		border-radius: 0.5rem;
	}

	.after {
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 1rem 1rem 0 1rem;
		border-color: #bb8f77 transparent transparent transparent;
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
		justify-content: center;
		align-items: center;
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
