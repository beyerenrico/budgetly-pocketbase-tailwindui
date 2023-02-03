<script lang="ts">
	export let headline: string = '';
	export let description: string = '';
	export let withAction: boolean = false;
	export let action: string = '';
	export let actionLabel: string = '';
</script>

<div class="py-6">
	<div class="px-4 sm:px-6 md:px-8">
		{#if headline}
			<div class="relative z-20 pb-3 mb-6 border-b border-gray-200">
				<div class="flex items-center justify-between gap-4">
					<div class="w-full">
						<slot name="headline">
							<h1 class="text-lg font-medium leading-6 text-gray-900">{headline}</h1>
						</slot>
						{#if description}
							<slot name="description">
								<p class="max-w-2xl mt-1 text-sm text-gray-500">
									{description}
								</p>
							</slot>
						{/if}
					</div>
					{#if withAction}
						<div class="flex-shrink-0 mt-3 sm:mt-0 sm:ml-4">
							<slot name="action">
								<form {action} method="POST">
									<button
										type="submit"
										class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
										>{actionLabel}</button
									>
								</form>
							</slot>
						</div>
					{/if}
				</div>
			</div>
		{/if}
		<slot>
			<em>Pretty empty...</em>
		</slot>
	</div>
</div>
