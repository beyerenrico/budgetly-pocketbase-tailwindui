<script lang="ts">
	export let headline: string = '';
	export let description: string = '';
</script>

<div class="py-6">
	<div class="max-w-7xl px-4 sm:px-6 md:px-8">
		{#if headline}
			<div class="border-b border-gray-200 pb-3 mb-6">
				<h1 class="text-lg font-medium leading-6 text-gray-900">{headline}</h1>
				{#if description}
					<p class="mt-1 max-w-2xl text-sm text-gray-500">
						{description}
					</p>
				{/if}
			</div>
		{/if}
		<slot />
	</div>
</div>
