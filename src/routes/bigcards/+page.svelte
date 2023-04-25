<script>
	import image from '../../assets/img/logo.png';

	export let data;
	let cards = data.cards;

	let pages = [undefined];

	const handleRemove = (i) => {
		const newCard = [...cards];
		newCard.splice(i, 1);
		cards = newCard;
		pagesReload();
	};

	const handleAdd = () => {
		cards = [...cards, {}];
		pagesReload();
	};

	const pagesReload = () => {
		pages = Array(Math.trunc(cards.length / 4) + 1).fill(undefined);
	};
</script>

<section class={cards.length % 4 === 0 ? 'remove-page' : ''}>
	{#each pages as _, numPage}
		<div class="page">
			{#each cards as _, i}
				{#if i >= numPage * 4 && i < (numPage + 1) * 4 && i < cards.length}
					<div class="card">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div class="remove" on:click={() => handleRemove(i)}>X</div>
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
	img {
		height: 8cm;
		margin-left: 12mm;
		width: initial;
		object-fit: contain;
	}

	.page {
		width: 29.7cm;
		height: 21cm;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);

		background: #fff;
		margin: 0 auto;
		margin-bottom: 0.5cm;
		box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);

		/* découpe */
		border-left: dashed 1px #00000020;
		border-top: dashed 1px #00000020;
		box-sizing: border-box;
	}

	.card {
		position: relative;
		display: flex;
		align-items: center;
		max-height: calc(29.7cm / 2);

		/* découpe */
		border-right: dashed 1px #00000020;
		border-bottom: dashed 1px #00000020;
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
