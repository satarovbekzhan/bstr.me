<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import cn from 'classnames';
</script>

<svelte:head>
	<title>{m.wordmark()} - {m.cv()}</title>
	<meta name="description" content={m.wordmark()} />
</svelte:head>

<main
	class={cn(
		'flex flex-col gap-8 md:gap-10 lg:gap-12 p-4 md:p-5 lg:p-6 pt-0 md:pt-0 lg:pt-0',
		'[&_section]:flex [&_section]:flex-col [&_section]:gap-4 [&_section]:md:gap-5 [&_section]:lg:gap-6 [&_section]:max-w-screen-lg',
		'[&_h1]:text-balance [&_h1]:text-2xl [&_h1]:md:text-4xl [&_h1]:lg:text-5xl [&_h1]:font-black [&_h1]:mt-2 [&_h1]:md:mt-3 [&_h1]:lg:mt-4',
		'[&_h2]:text-balance [&_h2]:text-base [&_h2]:md:text-xl [&_h2]:lg:text-2xl [&_h2]:font-bold',
		'[&_p]:text-balance [&_p]:text-base [&_p]:md:text-xl [&_p]:lg:text-2xl [&_p]:whitespace-pre-wrap',
		"[&_ul]:list-['–_'] [&_ul]:text-balance [&_ul]:pl-4 [&_ul]:md:pl-6 [&_ul]:lg:pl-8 [&_ul]:mt-1 [&_ul]:md:mt-2 [&_ul]:lg:mt-3",
		'[&_li]:text-balance [&_li]:text-base [&_li]:md:text-xl [&_li]:lg:text-2xl [&_li]:whitespace-pre-wrap [&_li]:pl-1 [&_li]:md:pl-1.5 [&_li]:lg:pl-2'
	)}
>
	<section id="summary">
		<p>
			{@html m.summary_frontend_developer()}
		</p>
	</section>
	<section id="experience">
		<h1>{m.experience()}</h1>
		<div>
			{@html m.experience_lead_frontend_developer_at_wedevx()}
		</div>
		<div>
			{@html m.experience_frontend_developer_at_wedevx()}
		</div>
		<div>
			{@html m.experience_frontend_developer_at_onoi()}
		</div>
		<div>
			{@html m.experience_android_developer_intern_at_pendix()}
		</div>
	</section>
	<section id="education">
		<h1>{m.education()}</h1>
		<div>
			{@html m.education_bsc_at_inai()}
		</div>
		<div>
			{@html m.education_bsc_at_whz()}
		</div>
	</section>
	<section id="languages">
		<h1>{m.languages()}</h1>
		<div>
			{@html m.language_kyrgyz_and_russian()}
		</div>
		<div>
			{@html m.language_english()}
		</div>
		<div>
			{@html m.language_german_and_turkish()}
		</div>
	</section>
</main>
