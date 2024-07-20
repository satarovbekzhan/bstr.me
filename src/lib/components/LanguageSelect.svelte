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

<div role="menu" class="relative group" tabindex="0">
	<div
		aria-label={m.language()}
		class="flex items-center gap-2 w-fit rounded-sm px-2 text-base hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer group-focus-within:bg-neutral-100 dark:group-focus-within:bg-neutral-900 pr-2 py-2 lg:py-1 aspect-square"
	>
		<Translate2Editor
			tabindex="-1"
			aria-hidden="true"
			focusable="false"
			class="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 inline-block pointer-events-none"
		/>
	</div>
	<div
		class="pointer-events-none group-focus-within:pointer-events-auto opacity-0 group-focus-within:opacity-100 absolute flex flex-col top-6 md:top-5 lg:top-4 pt-4 md:pt-8 lg:pt-12 -right-10 md:-right-[3.25rem] lg:-right-16"
	>
		<ul
			role="menu"
			class="p-2 rounded-sm shadow-xl bg-white dark:bg-black border border-neutral-100 dark:border-neutral-900 w-44"
		>
			{#each availableLanguageTags as lang}
				<li role="menuitem">
					<a
						href={i18n.route($page.url.pathname)}
						hreflang={lang}
						aria-current={lang === languageTag() ? 'page' : undefined}
						class="flex items-center gap-2 rounded-sm px-2 py-1 text-lg md:text-xl lg:text-2xl hover:bg-neutral-100 dark:hover:bg-neutral-900 w-full"
						>{languageTagsMap[lang]}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</div>
