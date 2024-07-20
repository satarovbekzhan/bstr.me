<script lang="ts">
	import { browser } from '$app/environment';
	import { SunLineWeather, MoonLineWeather } from 'svelte-remix';
	import * as m from '$lib/paraglide/messages.js';

	let isDarkMode = true;

	function switchTheme() {
		isDarkMode = !isDarkMode;

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

<button
	aria-label={isDarkMode ? m.light() : m.dark()}
	on:click={switchTheme}
	class="flex items-center gap-2 w-fit rounded-sm px-2 text-base hover:bg-neutral-100 dark:hover:bg-neutral-900 py-2 lg:py-1 aspect-square"
>
	{#if isDarkMode}
		<MoonLineWeather
			tabindex="-1"
			aria-hidden="true"
			focusable="false"
			class="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 inline-block outline-none"
		/>
	{:else}
		<SunLineWeather
			tabindex="-1"
			aria-hidden="true"
			focusable="false"
			class="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 inline-block outline-none"
		/>
	{/if}
</button>
