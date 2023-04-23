<script>
	const handleMenu = () => {
		const ul = document.querySelector('.menu ul');
		const button = document.querySelector('.menu .button');

		if (ul.style.display === 'none') {
			ul.style.display = 'block';
			button.style.transform = 'rotate(90deg)';
		} else {
			ul.style.display = 'none';
			button.style.transform = 'rotate(0deg)';
		}
	};

	export let data;
	let { menu } = data;
</script>

<div class="menu">
	<div class="button" on:click={handleMenu} on:keypress={handleMenu}>
		<div />
		<div />
		<div />
	</div>
	<ul>
		{#each menu as { title, link }}
			<li><a href={link}>{title}</a></li>
		{/each}
	</ul>
</div>

<slot />

<style>
	:global(html) {
		margin: 0;
		box-sizing: border-box;
		background: #e4e4e4;
		font-family: mediumLemonMilk;
		user-select: none;
	}

	:global(body) {
		margin: 0;
	}

	@font-face {
		font-family: lightLemonMilk;
		src: url('/src/assets/fonts/LEMONMILK-Light.otf');
	}

	@font-face {
		font-family: mediumLemonMilk;
		src: url('/src/assets/fonts/LEMONMILK-Medium.otf');
	}

	.menu {
		position: fixed;
		display: flex;
		top: 1rem;
		left: 1rem;
	}

	.menu .button {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 2rem;
		height: 2rem;
		border-radius: 0.25rem;
		transition: transform 0.2s ease-in-out;
		transform: rotate(90deg);
	}

	.menu .button div {
		height: 0.4rem;
		width: 2rem;
		border-radius: 0.25rem;
		background: #484848;
	}

	.menu ul {
		display: block;
		list-style: none;
		padding: 0.1rem 1rem;
		margin: 0;
	}

	.menu li {
		border-radius: 0.5rem;
		padding: 0.25rem 0.5rem;
	}

	.menu li:hover {
		background: #acabab;
	}

	.menu li a {
		text-decoration: none;
		color: #484848;
	}

	@media print {
		.menu {
			display: none;
		}
	}
</style>
