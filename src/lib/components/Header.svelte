<script lang="ts">
	import { Menu3LineSystem, CloseLineSystem } from 'svelte-remix';
	import * as m from '$lib/paraglide/messages.js';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import LanguageSelect from '$lib/components/LanguageSelect.svelte';

	const links = [
		{
			label: m.about(),
			href: '/#about-me'
		},
		{
			label: m.services(),
			href: '/services'
		},
		{ label: m.cv(), href: '/cv' },
		{ label: m.blog(), href: '/blog' },
		{
			label: m.contacts(),
			href: '/#contacts'
		}
	];
</script>

<header class="sticky top-0 bg-white dark:bg-black z-10">
	<nav class="p-2 md:p-3 lg:p-4 flex gap-2 md:gap-3 lg:gap-4 items-center">
		<a
			href="/"
			class="flex items-center gap-2 w-fit h-8 md:h-10 lg:h-12 overflow-hidden rounded-sm px-2 py-1 text-base md:text-2xl lg:text-4xl hover:bg-neutral-100 dark:hover:bg-neutral-900 font-medium whitespace-pre"
			>{m.wordmark()}</a
		>

		<div class="flex-1"></div>

		<ThemeSwitch />

		<LanguageSelect />

		<div role="menu" class="relative group" tabindex="0">
			<div
				aria-label={m.menu()}
				class="flex items-center gap-2 w-fit rounded-sm px-2 text-base hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer group-focus-within:bg-neutral-100 dark:group-focus-within:bg-neutral-900 py-2 md:py-1 aspect-square"
			>
				<Menu3LineSystem
					tabindex="-1"
					aria-hidden="true"
					focusable={false}
					class="inline-block group-focus-within:hidden w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 pointer-events-none"
				/>
				<CloseLineSystem
					tabindex="-1"
					aria-hidden="true"
					focusable={false}
					class="hidden group-focus-within:inline-block w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 pointer-events-none"
				/>
			</div>
			<div
				class="pointer-events-none group-focus-within:pointer-events-auto opacity-0 group-focus-within:opacity-100 absolute flex flex-col top-6 md:top-5 lg:top-4 pt-4 md:pt-8 lg:pt-12 right-0"
			>
				<ul
					role="menu"
					class="p-2 rounded-sm shadow-xl bg-white dark:bg-black border border-neutral-100 dark:border-neutral-900 w-52"
				>
					{#each links as { label, href }}
						<li role="menuitem">
							<a
								{href}
								class="flex items-center gap-2 rounded-sm px-2 py-1 text-lg md:text-xl lg:text-2xl hover:bg-neutral-100 dark:hover:bg-neutral-900 w-full"
								>{label}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</nav>
</header>
