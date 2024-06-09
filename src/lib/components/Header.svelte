<script lang="ts">
	import { Menu3LineSystem, CloseLineSystem } from 'svelte-remix';
	import * as m from '$lib/paraglide/messages.js';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import LanguageSelect from '$lib/components/LanguageSelect.svelte';

	const links = [
		{
			label: m.about(),
			href: '/',
			child: [
				{ label: 'About Me', href: '/' },
				{ label: 'Employment History', href: '/' },
				{ label: 'Education', href: '/' }
			]
		},
		{
			label: m.services(),
			href: '/',
			child: [
				{ label: 'Employment', href: '/' },
				{ label: 'Freelance', href: '/' },
				{ label: 'Collaboration', href: '/' }
			]
		},
		{ label: m.projects(), href: '/' },
		{ label: m.blog(), href: '/' },
		{
			label: m.contacts(),
			href: '/',
			child: [
				{ label: 'Get in Touch', href: '/' },
				{ label: 'Schedule a Call', href: '/' }
			]
		}
	];
</script>

<header
	class="px-2 py-2 flex gap-2 border-b border-neutral-100 dark:border-neutral-900 sticky top-0 bg-white dark:bg-black z-10 items-center"
>
	<a
		href="/"
		class="flex items-center gap-2 w-fit rounded-sm px-2 py-1 text-base hover:bg-neutral-100 dark:hover:bg-neutral-900 font-bold whitespace-pre"
		>{m.wordmark()}</a
	>

	{#each links as { label, href, child }}
		{#if child}
			<details class="relative group hidden md:block">
				<summary
					class="flex items-center gap-2 w-fit rounded-sm px-2 py-1 text-base hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer pr-6 group-open:bg-neutral-100 dark:group-open:bg-neutral-900 before:content-['+'] before:absolute before:right-2 before:top-1/2 before:-translate-y-1/2 before:text-neutral-500 group-open:before:content-['−'] group-open:before:font-semibold whitespace-pre"
					>{label}
				</summary>
				<ul
					class="absolute top-12 p-2 rounded-sm shadow-xl bg-white dark:bg-black border border-neutral-100 dark:border-neutral-900 w-48"
				>
					{#each child as { label, href }}
						<li>
							<a
								{href}
								class="flex items-center gap-2 rounded-sm px-2 py-1 text-base hover:bg-neutral-100 dark:hover:bg-neutral-900 w-full"
								>{label}</a
							>
						</li>
					{/each}
				</ul>
			</details>
		{:else}
			<a
				{href}
				class="items-center gap-2 w-fit rounded-sm px-2 py-1 text-base hover:bg-neutral-100 dark:hover:bg-neutral-900 hidden md:flex"
				>{label}</a
			>
		{/if}
	{/each}

	<div class="flex-1"></div>

	<ThemeSwitch />

	<LanguageSelect />

	<details class="relative group md:hidden">
		<summary
			class="flex items-center gap-2 w-fit rounded-sm px-2 text-base hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer group-open:bg-neutral-100 dark:group-open:bg-neutral-900 py-2 md:py-1"
		>
			<Menu3LineSystem
				size="1rem"
				tabindex="-1"
				aria-hidden="true"
				focusable="false"
				class="group-open:hidden"
			/>
			<CloseLineSystem
				size="1rem"
				tabindex="-1"
				aria-hidden="true"
				focusable="false"
				class="hidden group-open:inline"
			/>
		</summary>
		<ul
			class="absolute top-12 p-2 rounded-sm shadow-xl bg-white dark:bg-black border border-neutral-100 dark:border-neutral-900 w-80 right-0"
		>
			{#each links as { label, href, child }, i}
				{#if i > 0}
					<hr class="my-1.5 border-neutral-100" />
				{/if}
				{#if child}
					{#each child as { label, href }}
						<li>
							<a
								{href}
								class="flex items-center gap-2 rounded-sm px-2 py-1 text-base hover:bg-neutral-100 dark:hover:bg-neutral-900 w-full"
								>{label}</a
							>
						</li>
					{/each}
				{:else}
					<li>
						<a
							{href}
							class="flex items-center gap-2 rounded-sm px-2 py-1 text-base hover:bg-neutral-100 dark:hover:bg-neutral-900 w-full"
							>{label}</a
						>
					</li>
				{/if}
			{/each}
		</ul>
	</details>
</header>
