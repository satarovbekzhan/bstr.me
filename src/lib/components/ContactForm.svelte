<script lang="ts">
	import { enhance } from '$app/forms';
	import cn from 'classnames';
	import { LinkedinBoxFillLogos } from 'svelte-remix';
	import { PUBLIC_GOOGLE_RECATCHA_SITE_KEY } from '$env/static/public';

	let status: 'idle' | 'loading' | 'success' | 'errored' = 'idle';
	let is429 = false;
</script>

<svelte:head>
	<script
		src={`https://www.google.com/recaptcha/api.js?render=${PUBLIC_GOOGLE_RECATCHA_SITE_KEY}`}
		defer
	></script>
	{@html `<script>
		document.addEventListener('DOMContentLoaded', function() {
			grecaptcha.ready(function() {
				grecaptcha
					.execute('${PUBLIC_GOOGLE_RECATCHA_SITE_KEY}', { action: 'validate_captcha' })
					.then(function (token) {
						document.getElementById('recaptcha').value = token;
					});
			});
		});
	</script>`}
</svelte:head>

{#if status === 'success'}
	<p class="text-base md:text-xl lg:text-2xl text-green-500">
		Awesome! I will get back to you as soon as possible.
	</p>
{:else if status === 'errored'}
	<div class="flex flex-col gap-2 text-base md:text-xl lg:text-2xl">
		<p class="text-red-500">
			{#if is429}
				Sorry! You've reached the daily limit of messages.
			{:else}
				Hmmm! Looks like I have to fix this bug.
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
		class="flex flex-col gap-0 text-base md:text-xl lg:text-2xl max-w-screen-lg"
	>
		<input type="hidden" id="recaptcha" name="recaptcha" />
		<input
			name="name"
			type="text"
			placeholder="Name"
			required
			disabled={status === 'loading'}
			class="appearance-none block w-full bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white placeholder:text-neutral-600 dark:placeholder:text-neutral-400 rounded-t-sm rounded-b-none py-2 px-3 focus:outline-none focus:bg-neutral-200 dark:focus:bg-neutral-800"
		/>
		<input
			name="email"
			type="email"
			placeholder="Email"
			required
			disabled={status === 'loading'}
			class="appearance-none block w-full bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white placeholder:text-neutral-600 dark:placeholder:text-neutral-400 rounded-none py-2 px-3 focus:outline-none focus:bg-neutral-200 dark:focus:bg-neutral-800"
		/>
		<textarea
			name="message"
			rows="4"
			placeholder="Your message"
			required
			disabled={status === 'loading'}
			class="appearance-none block w-full bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white placeholder:text-neutral-600 dark:placeholder:text-neutral-400 rounded-b-sm rounded-t-none py-2 px-3 focus:outline-none focus:bg-neutral-200 dark:focus:bg-neutral-800"
		></textarea>
		<button
			type="submit"
			disabled={status === 'loading'}
			class={cn(
				'bg-neutral-900 dark:bg-neutral-100 hover:bg-neutral-800 dark:hover:bg-neutral-300 text-white dark:text-black rounded-sm px-3 py-2 mt-4 md:mt-5 lg:mt-6',
				{
					'pointer-events-none opacity-80': status === 'loading'
				}
			)}
		>
			{#if status === 'loading'}
				Wait
			{:else}
				Submit
			{/if}
		</button>
	</form>
{/if}
