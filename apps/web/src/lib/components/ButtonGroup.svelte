<script lang="ts">
	export let actionLeft: string = '';
	export let actionCenter: string = '';
	export let actionRight: string = '';
</script>

<span class="isolate inline-flex rounded-md shadow-sm">
	{#if $$slots.leftLabel}
		<button
			on:click
			formaction={actionLeft}
			type={actionLeft ? 'submit' : 'button'}
			class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
		>
			<slot name="leftLabel" />
		</button>
	{/if}
	{#if $$slots.centerLabel}
		<button
			on:click
			formaction={actionCenter}
			type={actionCenter ? 'submit' : 'button'}
			class="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
		>
			<slot name="centerLabel" />
		</button>
	{/if}
	{#if $$slots.rightLabel}
		<button
			on:click
			formaction={actionRight}
			type={actionRight ? 'submit' : 'button'}
			class="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
		>
			<slot name="rightLabel" />
		</button>
	{/if}
</span>
