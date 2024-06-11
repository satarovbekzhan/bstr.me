<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import MountainsIllustration from '$lib/components/MountainsIllustration.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<svelte:head>
	<title>{m.wordmark()}</title>
	<meta name="description" content={m.wordmark()} />
</svelte:head>

<main>
	<section id="hero" class="pt-12">
		<div class="container mx-auto px-4 relative">
			<button
				tabindex="0"
				aria-label="Soluna"
				on:click={() => {
					alert(`Hey, hey, hey! Give a high "tab" and keep going!`);
				}}
				class="appearance-none absolute top-0 right-0 md:top-4 md:right-8 lg:top-8 lg:right-16 -z-10 h-16 w-16 rounded-full blur-[1px] m-12 bg-[#FFFF00] shadow-[0_0_100px_50px_#FFFF0050] dark:bg-[#f0f0f0] dark:shadow-[0_0_100px_50px_#f0f0f040] cursor-pointer pointer-events-[all]"
			></button>
			<p class="text-3xl md:text-4xl lg:text-5xl">Discover</p>
			<h1 class="text-7xl md:text-8xl lg:text-9xl font-black">Bekzhan!</h1>
			<p class="text-2xl md:text-3xl lg:text-4xl">Bridging the tech world from</p>
			<p class="text-4xl md:text-5xl lg:text-6xl font-bold">Kyrgyzstan</p>
		</div>
		<div class="mt-4 md:mt-6 lg:mt-8 w-full overflow-x-hidden">
			<MountainsIllustration clazz="min-w-[40rem]" />
		</div>
	</section>

	<section id="about-me" class="container mx-auto py-16 md:py-20 lg:py-24 px-4 flex flex-col gap-8">
		<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">About Me</h1>
		<p class="text-lg md:text-xl lg:text-2xl max-w-[42rem]">
			Frontend Developer experienced in leading projects from start to launch, emphasizing
			collaboration and attention to detail. Skilled in crafting optimal user experiences through
			effective collaboration with UX/UI teams. Proficient in various programming languages and
			frameworks, with a solid educational background in computer science. Fluent in Kyrgyz,
			Russian, and English, with intermediate proficiency in German and Turkish
		</p>
	</section>

	<section
		id="employment-history"
		class="container mx-auto py-16 md:py-20 lg:py-24 px-4 flex flex-col gap-8"
	>
		<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">Employment History</h1>
		<div class="text-lg md:text-xl lg:text-2xl">
			<h2 class="font-medium">Lead Frontend Developer, Wedevx Inc.</h2>
			<p>10/2022 – Present, Chicago, IL, USA (Remote)</p>
			<ul class="list-['•_'] text-balance pl-8">
				<li class="pl-2">Directed the development of wedevx.co platform from concept to launch.</li>
				<li class="pl-2">Managed a collaborative environment within the development team.</li>
				<li class="pl-2">
					Collaborated with UX/UI teams to align technical implementation with design vision.
				</li>
				<li class="pl-2">
					Introduced new features enhancing platform functionality and competitiveness.
				</li>
				<li class="pl-2">
					Advised product owner on feasibility and technical aspects of new features.
				</li>
			</ul>
		</div>
		<div class="text-lg md:text-xl lg:text-2xl">
			<h2 class="font-medium">Frontend Developer, ONOI Software UG</h2>
			<p>11/2021 – 10/2022, Zwickau, Germany (Remote)</p>
			<ul class="list-['•_'] text-balance pl-8">
				<li class="pl-2">Led the development of the frontend side of multiple projects.</li>
				<li class="pl-2">Worked closely with the UX/UI team to design and implement interfaces.</li>
				<li class="pl-2">
					Consulted with clients regularly to understand their needs and provide expert advice.
				</li>
			</ul>
		</div>
		<div class="text-lg md:text-xl lg:text-2xl">
			<h2 class="font-medium">Android Developer Intern, Pendix GmbH</h2>
			<p>09/2021 – 11/2021, Zwickau, Germany</p>
			<ul class="list-['•_'] text-balance pl-8">
				<li class="pl-2">
					Updated the Android application to support newer versions of the Android OS.
				</li>
				<li class="pl-2">
					Implemented Bluetooth LE feature allowing users to view device firmware versions.
				</li>
			</ul>
		</div>
	</section>

	<section
		id="education"
		class="container mx-auto py-16 md:py-20 lg:py-24 px-4 flex flex-col gap-8"
	>
		<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">Education</h1>
		<div class="text-lg md:text-xl lg:text-2xl">
			<h2 class="font-medium">
				B.Sc. in Computer Science, Kyrgyz-German Institute of Applied Informatics
			</h2>
			<p>09/2017 – 06/2023, Bishkek, Kyrgyzstan</p>
			<ul class="list-['•_'] text-balance pl-8">
				<li class="pl-2">Graduated with High Honors, achieving top grades (5 out of 5).</li>
				<li class="pl-2">
					Mathematics/Algebra, Discrete Mathematics and Logic, Applied Mathematics, Programming
					Languages, Object Oriented Programming, Theoretical Informatics, Algorithms and Data
					Structures, Web Technologies, Computer Networks & Telecommunications, Human Computer
					Interaction, Artificial Intelligence, Geographic Information Systems.
				</li>
			</ul>
		</div>
		<div class="text-lg md:text-xl lg:text-2xl">
			<h2 class="font-medium">
				B.Sc. in Computer Science, West Saxon University of Applied Sciences
			</h2>
			<p>10/2020 – 11/2021, Zwickau, Germany</p>
			<ul class="list-['•_'] text-balance pl-8">
				<li class="pl-2">
					Awarded the prestigious DAAD Scholarship for outstanding academic performance.
				</li>
				<li class="pl-2">
					Development of Distributed Applications, Requirements Engineering, Database Management
					Systems, Low-Level Programming, Computer Science and Society, Tactical Information
					Management, Project in Software Development, Scientific Work.
				</li>
			</ul>
		</div>
	</section>

	<section id="contacts" class="container mx-auto py-16 md:py-20 lg:py-24 px-4 flex flex-col gap-8">
		<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">Contacts</h1>
		<p class="text-lg md:text-xl lg:text-2xl max-w-[42rem]">
			Feel free to reach out to me with any questions or opportunities. I am always open to new
			challenges and collaborations.
		</p>
		<ContactForm />
	</section>
</main>

<!-- <style lang="postcss">
	.soluna {
		@apply fixed top-40 right-40 z-50 h-24 w-24 rounded-full;
		background-color: var(--soluna-bg-color);
		box-shadow: 0 0 100px 50px var(--soluna-shadow-color);
		filter: blur(1px);
		margin: 50px;
	}
</style> -->
