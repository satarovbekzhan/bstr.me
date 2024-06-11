<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n.js';
	import { PUBLIC_HOTJAR_ID, PUBLIC_HOTJAR_SV } from '$env/static/public';
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	{@html `<script>
		(function (h, o, t, j, a, r) {
			h.hj =
				h.hj ||
				function () {
					(h.hj.q = h.hj.q || []).push(arguments);
				};
			h._hjSettings = { hjid: ${PUBLIC_HOTJAR_ID}, hjsv: ${PUBLIC_HOTJAR_SV} };
			a = o.getElementsByTagName('head')[0];
			r = o.createElement('script');
			r.async = 1;
			r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
			a.appendChild(r);
		})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
	</script>`}
</svelte:head>

<ParaglideJS {i18n}>
	<div
		class="min-h-[100dvh] flex flex-col font-body selection:bg-black/25 dark:selection:bg-white/25"
	>
		<Header />
		<slot />
		<Footer />
	</div>
</ParaglideJS>
