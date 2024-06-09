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

<details class="relative group">
	<summary
		class="flex items-center gap-2 w-fit rounded-sm px-2 text-base hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer group-open:bg-neutral-100 dark:group-open:bg-neutral-900 pr-2 py-2 lg:py-1"
	>
		<Translate2Editor size="1rem" tabindex="-1" aria-hidden="true" focusable="false" />
		<span class="hidden lg:inline">{m.language()}</span>
	</summary>
	<ul
		class="absolute top-12 p-2 rounded-sm shadow-xl bg-white dark:bg-black border border-neutral-100 dark:border-neutral-900 w-44 right-0"
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
</details>
