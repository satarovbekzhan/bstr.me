<script lang="ts">
	import { page } from '$app/stores';
	import * as m from '$lib/paraglide/messages.js';
</script>

<div
	class="flex-1 flex flex-col gap-2 md:gap-3 lg:gap-4 p-4 md:p-5 lg:p-6 pt-0 md:pt-0 lg:pt-0 text-base md:text-xl lg:text-2xl"
>
	<h2 class="">{$page.status}</h2>
	{#if $page.status === 404}
		<p>{m.not_found()}</p>
	{:else}
		<p>{$page.error?.message}</p>
	{/if}
</div>
