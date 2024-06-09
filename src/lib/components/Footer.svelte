<script lang="ts">
	const links = [
		{
			title: 'About Me',
			items: [
				{ title: 'About Me', href: '/#about-me' },
				{ title: 'Employment History', href: '/#employment-history' },
				{ title: 'Education', href: '/#education' }
			]
		},
		{
			title: 'Services',
			items: [
				{ title: 'Consultation', href: '/services#consultation' },
				{ title: 'Employment', href: '/services#employment' },
				{ title: 'Freelance', href: '/services#freelance' },
				{ title: 'Mentorship', href: '/services#mentorship' }
			]
		},
		{
			title: 'Projects',
			items: [
				{ title: 'The Project X', href: '/projects#project-x' },
				{ title: 'Another Project Y', href: '/projects#project-y' },
				{ title: 'Third Project Z', href: '/projects#project-z' }
			]
		},
		{
			title: 'Blog',
			items: [
				{ title: 'Post About Me', href: '/blog/post-about-me' },
				{ title: 'Post About Kyrgyzstan', href: '/blog/post-about-kyrgyzstan' }
			]
		},
		{
			title: 'Contacts',
			items: [
				{ title: 'Email', href: '/#email' },
				{ title: 'Phone', href: '/#phone' },
				{ title: 'Social Media', href: '/#social-media' }
			]
		}
	];
</script>

<footer
	class="border-t border-neutral-100 dark:border-neutral-900 bg-white dark:bg-black flex flex-col gap-4"
>
	<div class="flex gap-x-4 gap-y-8 justify-center p-4 flex-wrap">
		{#each links as { title, items }}
			<div class="flex-1 flex flex-col gap-2">
				<h2 class="font-bold">{title}</h2>
				<ul class="">
					{#each items as { title, href }}
						<li>
							<a {href} class="hover:text-blue-500 whitespace-pre text-sm">{title}</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
	<p class="text-sm bg-neutral-100 dark:bg-neutral-900 p-4">
		© {new Date().getFullYear()} Bekzhan Satarov. All rights reserved. The material on this site may
		not be reproduced, distributed, transmitted, cached, or otherwise used, except with the prior written
		permission of Bekzhan Satarov.
	</p>
</footer>
