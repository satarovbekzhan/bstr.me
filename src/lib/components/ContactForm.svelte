<script lang="ts">
</script>

<form action="/" class="max-w-[42rem] flex flex-col gap-4">
	<input
		type="text"
		name="name"
		id="name"
		placeholder="Leo Messi"
		required
		class="appearance-none block w-full bg-neutral-100 dark:bg-neutral-900 text-gray-700 rounded-sm py-2 px-3 focus:outline-none focus:bg-neutral-200 dark:focus:bg-neutral-800 text-base md:text-lg lg:text-xl"
	/>
	<textarea
		name="message"
		id="message"
		rows="3"
		placeholder="Hey! Let's join to Inter Miami!"
		required
		class="appearance-none block w-full bg-neutral-100 dark:bg-neutral-900 text-gray-700 rounded-sm py-2 px-3 focus:outline-none focus:bg-neutral-200 dark:focus:bg-neutral-800 text-base md:text-lg lg:text-xl"
	></textarea>
	<button
		type="submit"
		class="bg-neutral-900 dark:bg-neutral-100 hover:bg-neutral-800 dark:hover:bg-neutral-300 text-white dark:text-black rounded-sm px-3 py-2"
	>
		Submit
	</button>
</form>
