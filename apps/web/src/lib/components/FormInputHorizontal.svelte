<script lang="ts">
	export let label: string;
	export let id: string;
	export let value: string = '';
	export let placeholder: string = '';
	export let type: string = 'text';
	export let autocomplete: string = 'on';
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let prependSymbol: boolean = false;
	export let symbol: string = '';
</script>

<div class="sm:grid sm:grid-cols-2 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
	<label for={id} class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">{label}</label>
	<div class="mt-1 sm:mt-0">
		<div class="flex rounded-md shadow-sm">
			{#if prependSymbol}
				<span
					class="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 sm:text-sm"
					>{symbol}</span
				>
			{/if}
			<input
				name={id}
				{id}
				{value}
				{placeholder}
				{type}
				{autocomplete}
				{required}
				{disabled}
				class="block w-full min-w-0 flex-1 rounded-none {!prependSymbol
					? 'rounded-l-md'
					: ''} rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
			/>
		</div>
	</div>
</div>
