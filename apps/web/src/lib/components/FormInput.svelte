<script lang="ts">
	import { classNames } from '$lib/utils';

	export let label: string;
	export let id: string;
	export let value: string = '';
	export let placeholder: string = '';
	export let step: string = '';
	export let type: string = 'text';
	export let autocomplete: string = 'on';
	export let required: boolean = false;
	export let disabled: boolean = false;
</script>

<div class="w-full">
	<label for={id} class="block text-sm font-medium text-gray-700">{label}</label>
	<div class="relative mt-1">
		<slot name="prepend" />
		<input
			name={id}
			{id}
			{value}
			{placeholder}
			{type}
			{autocomplete}
			{required}
			{disabled}
			{step}
			class={classNames(
				$$slots.prepend && 'pl-7',
				$$slots.append && 'pr-12',
				'block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
			)}
		/>
		<slot name="append" />
	</div>
</div>
