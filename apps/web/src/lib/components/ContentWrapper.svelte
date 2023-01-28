<script>
	/**
	 * @type {string}
	 */
	export let headline = '';
</script>

<div class="py-6">
	{#if headline}
		<div class="max-w-7xl px-4 sm:px-6 md:px-8 pb-4">
			<h1 class="text-2xl font-semibold text-gray-900">{headline}</h1>
		</div>
	{/if}
	<div class="max-w-7xl px-4 sm:px-6 md:px-8">
		<slot />
	</div>
</div>
