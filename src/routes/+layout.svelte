<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n.js';

	import '../app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<ParaglideJS {i18n}>
	<div class="min-h-screen flex flex-col font-body">
		<Header />

		<slot />

		<footer>Footer</footer>
	</div>
</ParaglideJS>
