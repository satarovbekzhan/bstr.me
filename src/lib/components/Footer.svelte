<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<footer class="bg-neutral-100 dark:bg-neutral-900">
	<p class="p-4 md:p-5 lg:p-6 text-balance text-lg md:text-xl lg:text-2xl">
		{m.copy({ year: new Date().getFullYear() })}
	</p>
</footer>
