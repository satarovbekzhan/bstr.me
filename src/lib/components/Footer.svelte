<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<footer class="p-4 md:p-5 lg:p-6 bg-black dark:bg-white text-white dark:text-black">
	<p class="text-justify text-3xl md:text-5xl lg:text-6xl font-black break-words hyphens-auto">
		{m.copy({ year: new Date().getFullYear() })}
	</p>
</footer>
