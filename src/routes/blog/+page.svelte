<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<title>{m.wordmark()} - {m.blog()}</title>
	<meta name="description" content={m.wordmark()} />
</svelte:head>

<main class="flex-1">
	<section class="p-4 md:p-5 lg:p-6 pt-0 md:pr-0 lg:pt-0 flex flex-col gap-8 md:gap-10 lg:gap-12">
		<p class="text-base md:text-xl lg:text-2xl max-w-screen-lg text-balance">
			This page is under construction. Actually I have no idea what to write here at the moment. I
			will update this page as soon as I have something to share.
		</p>
		<p class="text-base md:text-xl lg:text-2xl">Unable to load posts. Please try again later.</p>
	</section>
</main>
