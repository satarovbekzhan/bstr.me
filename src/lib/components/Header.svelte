<script lang="ts">
	import { Translate2Editor } from 'svelte-remix';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
</script>

<header
	class="px-2 py-2 flex gap-2 border-b border-neutral-100 dark:border-neutral-900 sticky top-0 bg-white dark:bg-black z-10"
>
	<a href="/" class="anchor font-bold">Bekzhan Satarov</a>

	<details class="details group">
		<summary class="details-summary">About Me</summary>
		<ul class="details-content w-48">
			<li><a href="/" class="anchor w-full">About Me</a></li>
			<li><a href="/" class="anchor w-full">Employment History</a></li>
			<li><a href="/" class="anchor w-full">Education</a></li>
		</ul>
	</details>

	<details class="details group">
		<summary class="details-summary">Services</summary>
		<ul class="details-content w-36">
			<li><a href="/" class="anchor w-full">Employment</a></li>
			<li><a href="/" class="anchor w-full">Freelance</a></li>
			<li><a href="/" class="anchor w-full">Collaboration</a></li>
		</ul>
	</details>

	<a href="/" class="anchor">Projects</a>

	<a href="/" class="anchor">Blog</a>

	<details class="details group">
		<summary class="details-summary">Contact</summary>
		<ul class="details-content w-40">
			<li><a href="/" class="anchor w-full">Get in Touch</a></li>
			<li><a href="/" class="anchor w-full">Schedule a Call</a></li>
		</ul>
	</details>

	<div class="flex-1"></div>

	<ThemeSwitch />

	<details class="details group">
		<summary class="details-summary pr-2 before:content-[''] group-open:before:content-['']"
			><Translate2Editor size="1rem" tabindex="-1" />Language</summary
		>
		<ul class="details-content w-full right-0">
			<li><a href="/" class="anchor w-full">English</a></li>
			<li><a href="/" class="anchor w-full">Русский</a></li>
			<li><a href="/" class="anchor w-full">Deutsch</a></li>
			<li><a href="/" class="anchor w-full">Türkçe</a></li>
			<li><a href="/" class="anchor w-full">Кыргызча</a></li>
		</ul>
	</details>
</header>
