<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';

	const services = [
		{
			title: 'Expert Tech Consultation',
			description:
				'Gain strategic insights and solutions tailored to your project needs. From technology stack selection to architecture design, I provide guidance to drive your success with informed technical decisions.'
		},
		{
			title: 'Custom Web Developmnt',
			description:
				'Create high-quality, responsive landing pages and web platforms. Specializing in both frontend and backend development, I deliver user-friendly, engaging websites tailored to your unique requirements.'
		},
		{
			title: 'Professional Mentoring',
			description:
				'Accelerate your career growth with personalized mentoring. Receive practical knowledge, coding skills improvement, and tailored advice on career development from a seasoned software engineer.'
		}
	];
</script>

<svelte:head>
	<title>{m.wordmark()} - {m.services()}</title>
	<meta name="description" content={m.wordmark()} />
</svelte:head>

<main class="flex flex-col gap-8 md:gap-10 lg:gap-12 p-4 md:p-5 lg:p-6 pt-0 md:pt-0 lg:pt-0">
	<section class="flex flex-col gap-4 md:gap-5 lg:gap-6">
		<p class="text-base md:text-xl lg:text-2xl max-w-screen-lg text-balance">
			As a software engineer with 3 years of experience, I offer a range of services to help you
			achieve your project goals. Check out the services I provide below, and feel free to reach
			out.
		</p>
	</section>
	{#each services as { title, description }}
		<section class="flex flex-col gap-4 md:gap-5 lg:gap-6">
			<h2 class="text-2xl md:text-4xl lg:text-5xl font-black">{title}</h2>
			<p class="text-base md:text-xl lg:text-2xl max-w-screen-lg text-balance">{description}</p>
		</section>
	{/each}
</main>
