<script lang="ts">
	import { browser } from '$app/environment';
	import { SunLineWeather, MoonLineWeather } from 'svelte-remix';

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

<button on:click={switchTheme} class="anchor">
	{#if isDarkMode}
		<MoonLineWeather size="1rem" tabindex="-1" />
		Dark
	{:else}
		<SunLineWeather size="1rem" tabindex="-1" />
		Light
	{/if}
</button>
