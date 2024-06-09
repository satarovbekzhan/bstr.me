<script>
	import '../app.css';
</script>

<div class="h-screen flex flex-col font-body">
	<header>
		<a href="/">home</a>
		<a href="/about">about</a>
	</header>

	<slot />

	<footer>Footer</footer>
</div>
