<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<title>{m.wordmark()} - {m.projects()}</title>
	<meta name="description" content={m.wordmark()} />
</svelte:head>

<main class="flex-1">
	<section class="container mx-auto px-4 py-8">
		<p class="text-base">{m.soon()}!</p>
	</section>
</main>
