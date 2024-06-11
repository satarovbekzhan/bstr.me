<script lang="ts">
	import { enhance } from '$app/forms';
	import { LinkedinBoxFillLogos } from 'svelte-remix';
	import { PUBLIC_GOOGLE_RECATCHA_SITE_KEY } from '$env/static/public';

	let status: 'idle' | 'loading' | 'success' | 'errored' = 'idle';
	let is429 = false;
</script>

<svelte:head>
	<script
		src={`https://www.google.com/recaptcha/api.js?render=${PUBLIC_GOOGLE_RECATCHA_SITE_KEY}`}
	></script>
	{@html `<script defer>
		grecaptcha.ready(function () {
			grecaptcha
				.execute('${PUBLIC_GOOGLE_RECATCHA_SITE_KEY}', { action: 'validate_captcha' })
				.then(function (token) {
					document.getElementById('recaptcha').value = token;
				});
		});
	</script>`}
</svelte:head>

{#if status === 'success'}
	<p class="text-lg md:text-xl lg:text-2xl text-green-500">
		Awesome! I will get back to you as soon as possible.
	</p>
{:else if status === 'errored'}
	<div class="flex flex-col gap-2 text-lg md:text-xl lg:text-2xl">
		<p class="text-red-500">
			{#if is429}
				Sorry! You've reached the daily limit of messages.
			{:else}
				Hmmm! Looks like something went really wrong.
			{/if}
		</p>
		<p class="flex items-center gap-1 md:gap-2 text-current">
			You can always reach out to me directly via
			<a
				href="https://linkedin.com/in/satarovbekzhan"
				target="_blank"
				class="text-[#0077B5] hover:text-[#004e73] inline-flex items-center gap-0.5 w-fit"
			>
				<LinkedinBoxFillLogos
					tabindex="-1"
					aria-hidden="true"
					focusable="false"
					class="w-[1.125rem] h-[1.125rem] md:w-5 md:h-5 lg:w-6 lg:h-6 inline-block"
				/>
				LinkedIn.
			</a>
		</p>
	</div>
{:else}
	<form
		method="POST"
		action="/"
		use:enhance={({ cancel }) => {
			let yes = confirm('Are you sure you want to send a message to Bekzhan Satarov?');
			if (yes) status = 'loading';
			else cancel();

			return async ({ result }) => {
				status = result.status === 200 ? 'success' : 'errored';
				is429 = result.status === 429;
			};
		}}
		class="max-w-[42rem] flex flex-col gap-4 text-lg md:text-xl lg:text-2xl"
	>
		<input type="hidden" id="recaptcha" name="recaptcha" />
		<input
			name="name"
			type="text"
			placeholder="Name"
			required
			class="appearance-none block w-full bg-neutral-100 dark:bg-neutral-900 text-gray-700 rounded-sm py-2 px-3 focus:outline-none focus:bg-neutral-200 dark:focus:bg-neutral-800"
		/>
		<input
			name="email"
			type="email"
			placeholder="Email"
			required
			class="appearance-none block w-full bg-neutral-100 dark:bg-neutral-900 text-gray-700 rounded-sm py-2 px-3 focus:outline-none focus:bg-neutral-200 dark:focus:bg-neutral-800"
		/>
		<textarea
			name="message"
			rows="3"
			placeholder="Your message"
			required
			class="appearance-none block w-full bg-neutral-100 dark:bg-neutral-900 text-gray-700 rounded-sm py-2 px-3 focus:outline-none focus:bg-neutral-200 dark:focus:bg-neutral-800"
		></textarea>
		<button
			type="submit"
			class="bg-neutral-900 dark:bg-neutral-100 hover:bg-neutral-800 dark:hover:bg-neutral-300 text-white dark:text-black rounded-sm px-3 py-2"
		>
			{#if status === 'loading'}
				<div class="h-7 lg:h-8 w-10 relative mx-auto">
					<div
						class="absolute top-2.5 lg:top-3 w-2 h-2 rounded-full bg-current ease-[cubic-bezier(0,1,1,0)] left-1 animate-lds-ellipsis-1"
					></div>
					<div
						class="absolute top-2.5 lg:top-3 w-2 h-2 rounded-full bg-current ease-[cubic-bezier(0,1,1,0)] left-1 animate-lds-ellipsis-2"
					></div>
					<div
						class="absolute top-2.5 lg:top-3 w-2 h-2 rounded-full bg-current ease-[cubic-bezier(0,1,1,0)] left-4 animate-lds-ellipsis-2"
					></div>
					<div
						class="absolute top-2.5 lg:top-3 w-2 h-2 rounded-full bg-current ease-[cubic-bezier(0,1,1,0)] left-7 animate-lds-ellipsis-3"
					></div>
				</div>
			{:else}
				Submit
			{/if}
		</button>
	</form>
{/if}
