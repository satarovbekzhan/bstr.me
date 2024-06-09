<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="h-screen flex flex-col font-body">
	<Header />

	<slot />

	<footer>Footer</footer>
</div>
