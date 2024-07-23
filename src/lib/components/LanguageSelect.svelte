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

<div role="menubar" class="relative group">
	<button
		role="menuitem"
		aria-haspopup="true"
		aria-label={m.language()}
		class="flex items-center gap-2 w-fit rounded-sm px-2 text-base hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer group-focus-within:bg-neutral-100 dark:group-focus-within:bg-neutral-900 pr-2 py-2 lg:py-1 aspect-square"
	>
		<Translate2Editor
			tabindex="-1"
			aria-hidden="true"
			focusable="false"
			class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 inline-block pointer-events-none"
		/>
	</button>
	<div
		class="pointer-events-none group-focus-within:pointer-events-auto opacity-0 group-focus-within:opacity-100 absolute flex flex-col top-10 md:top-12 lg:top-14 -right-10 md:-right-12 lg:-right-14"
	>
		<ul
			role="menu"
			class="flex flex-col gap-1 p-1 rounded-sm shadow-xl bg-white dark:bg-black border border-neutral-100 dark:border-neutral-800 w-fit"
		>
			<!-- {#each availableLanguageTags as lang}
				<li role="menuitem">
					<a
						href={i18n.route($page.url.pathname)}
						hreflang={lang}
						aria-current={lang === languageTag() ? 'page' : undefined}
						class="flex items-center gap-2 rounded-sm px-2 py-1 text-base md:text-xl lg:text-2xl hover:bg-neutral-100 dark:hover:bg-neutral-900 w-full text-nowrap overflow-hidden"
						>{languageTagsMap[lang]}</a
					>
				</li>
			{/each} -->
			<li role="menuitem">
				<p
					class="rounded-sm px-2 py-1 text-base md:text-xl lg:text-2xl hover:bg-neutral-100 dark:hover:bg-neutral-900 w-full text-nowrap min-w-48"
				>
					Soon
				</p>
			</li>
		</ul>
	</div>
</div>
