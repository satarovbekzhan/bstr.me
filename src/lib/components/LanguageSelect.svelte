<script lang="ts">
	import { Translate2Editor } from 'svelte-remix';
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime.js';
	import { i18n } from '$lib/i18n.js';
	import { page } from '$app/stores';
	import * as m from '$lib/paraglide/messages.js';

	const languageTagsMap = {
		en: 'English',
		ru: 'Русский',
		de: 'Deutsch',
		tr: 'Türkçe',
		kg: 'Кыргызча'
	};
</script>

<div
	class="relative group"
	role="menu"
	tabindex="0"
	on:mouseenter={(event) => {
		event.currentTarget.setAttribute('open', '');
	}}
	on:mouseleave={(event) => {
		event.currentTarget.removeAttribute('open');
	}}
	on:keydown={(event) => {
		if (event.key === 'Enter') {
			const isOpen = event.currentTarget.hasAttribute('open');
			if (isOpen) {
				event.currentTarget.removeAttribute('open');
			} else {
				event.currentTarget.setAttribute('open', '');
			}
		}
	}}
>
	<div
		class="flex items-center gap-2 w-fit rounded-sm px-2 text-base hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer group-open:bg-neutral-100 dark:group-open:bg-neutral-900 pr-2 py-2 lg:py-1"
	>
		<Translate2Editor size="1rem" tabindex="-1" aria-hidden="true" focusable="false" />
		<span class="hidden lg:inline">{m.language()}</span>
	</div>
	<div class="absolute hidden group-open:flex group-open:flex-col top-8 pt-4 right-0">
		<ul
			class="p-2 rounded-sm shadow-xl bg-white dark:bg-black border border-neutral-100 dark:border-neutral-900 w-44"
		>
			{#each availableLanguageTags as lang}
				<li>
					<a
						href={i18n.route($page.url.pathname)}
						hreflang={lang}
						aria-current={lang === languageTag() ? 'page' : undefined}
						class="flex items-center gap-2 rounded-sm px-2 py-1 text-base hover:bg-neutral-100 dark:hover:bg-neutral-900 w-full"
						>{languageTagsMap[lang]}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</div>
