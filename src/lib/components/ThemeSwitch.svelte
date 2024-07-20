<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import cn from 'classnames';
	import { SunLineWeather, MoonLineWeather } from 'svelte-remix';
	import * as m from '$lib/paraglide/messages.js';

	let bool = true;
	let isDarkMode: boolean | undefined = undefined;
	$: isHomePage = $page.url.pathname.length === 3;

	function switchTheme() {
		isDarkMode = isDarkMode === undefined ? false : !isDarkMode;

		localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

		if (isDarkMode) document.documentElement.classList.add('dark');
		else document.documentElement.classList.remove('dark');
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			isDarkMode = true;
		} else {
			isDarkMode = false;
		}
	}
</script>

<svelte:head>
	<script lang="ts">
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<div
	class={cn('relative translate-y-0 transition-opacity duration-1000', {
		'!animate-none': !isHomePage,
		'opacity-0': isDarkMode == undefined
	})}
>
	{#if isHomePage}
		<span
			class="absolute top-1/2 right-1/2 h-[200%] w-[200%] translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] bg-[#FFFF00] shadow-[0_0_100px_50px_#FFFF0050] dark:bg-[#f0f0f0] dark:shadow-[0_0_100px_50px_#f0f0f040] cursor-pointer overflow-hidden pointer-events-none opacity-0"
		></span>
	{/if}
	<button
		aria-label={isDarkMode ? m.light() : m.dark()}
		on:click={switchTheme}
		class={cn(
			'flex items-center gap-2 w-fit rounded-sm px-2 text-base hover:bg-neutral-100 dark:hover:bg-neutral-900 py-2 lg:py-1 aspect-square relative',
			{ '!animate-none': !isHomePage }
		)}
	>
		{#if isDarkMode}
			<MoonLineWeather
				tabindex="-1"
				aria-hidden="true"
				focusable="false"
				class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 inline-block outline-none"
			/>
		{:else}
			<SunLineWeather
				tabindex="-1"
				aria-hidden="true"
				focusable="false"
				class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 inline-block outline-none"
			/>
		{/if}
	</button>
</div>

<style lang="postcss">
	@keyframes div {
		from {
			transform: translateY(8rem);
		}
	}

	@keyframes span {
		0% {
			filter: blur(1px);
			opacity: 1;
		}
		80% {
			filter: blur(1px);
			opacity: 1;
		}
	}

	@keyframes button {
		0% {
			opacity: 0;
			transform: scale(2);
			border-radius: 100%;
			color: transparent;
			background-color: transparent;
		}
		80% {
			opacity: 0;
			transform: scale(2);
			border-radius: 100%;
			color: transparent;
			background-color: transparent;
		}
	}

	div {
		animation: div ease-out;
		animation-timeline: scroll(y);
		animation-range: 0 300px;
	}

	span {
		animation: span ease-out;
		animation-timeline: scroll(y);
		animation-range: 0 300px;
	}

	button {
		animation: button ease-out;
		animation-timeline: scroll(y);
		animation-range: 0 300px;
	}
</style>
