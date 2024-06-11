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
		// {
		// 	label: m.services(),
		// 	href: '/services'
		// },
		// { label: m.projects(), href: '/projects' },
		// { label: m.blog(), href: '/blog' },
		{
			label: m.contacts(),
			href: '/#contacts'
		}
	];
</script>

<header
	class="border-b border-neutral-100 dark:border-neutral-900 sticky top-0 bg-white/80 dark:bg-black/80 z-10 backdrop-blur"
>
	<nav class="container mx-auto px-2 py-2 flex gap-2 items-center">
		<a
			href="/"
			class="flex items-center gap-2 w-fit rounded-sm px-2 py-1 text-base hover:bg-neutral-100 dark:hover:bg-neutral-900 font-bold whitespace-pre"
			>{m.wordmark()}</a
		>

		{#each links as { label, href }}
			<a
				{href}
				class="items-center gap-2 w-fit rounded-sm px-2 py-1 text-base hover:bg-neutral-100 dark:hover:bg-neutral-900 hidden md:flex"
				>{label}</a
			>
		{/each}

		<div class="flex-1"></div>

		<ThemeSwitch />

		<LanguageSelect />

		<div
			class="relative group md:hidden"
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
				class="flex items-center gap-2 w-fit rounded-sm px-2 text-base hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer group-open:bg-neutral-100 dark:group-open:bg-neutral-900 py-2 md:py-1"
			>
				<Menu3LineSystem
					tabindex="-1"
					aria-hidden="true"
					focusable="false"
					class="inline-block group-open:hidden w-4 h-4"
				/>
				<CloseLineSystem
					tabindex="-1"
					aria-hidden="true"
					focusable="false"
					class="hidden group-open:inline-block w-4 h-4"
				/>
			</div>
			<div class="absolute hidden group-open:flex group-open:flex-col top-8 pt-4 right-0">
				<ul
					role="menu"
					class="p-2 rounded-sm shadow-xl bg-white dark:bg-black border border-neutral-100 dark:border-neutral-900 w-52"
				>
					{#each links as { label, href }}
						<li role="menuitem">
							<a
								{href}
								class="flex items-center gap-2 rounded-sm px-2 py-1 text-base hover:bg-neutral-100 dark:hover:bg-neutral-900 w-full"
								>{label}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</nav>
</header>
