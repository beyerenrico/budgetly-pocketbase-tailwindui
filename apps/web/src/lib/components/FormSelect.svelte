<script lang="ts">
	import type { Record } from 'pocketbase';

	export let label: string;
	export let id: string;
	export let placeholder: string = '';
	export let autocomplete: string = 'on';
	export let required: boolean = false;
	export let disabled: boolean = false;

	export let elements: Record[] = [];
	export let selected: Record['id'] | undefined;
</script>

<div class="w-full">
	<label for={id} class="block text-sm font-medium text-gray-700">{label}</label>
	<select
		name={id}
		{id}
		{placeholder}
		{autocomplete}
		{required}
		{disabled}
		class="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
	>
		{#each elements as element}
			<option value={element.id} selected={element.id === selected}
				>{element.title ?? element.name ?? 'Please provide a name or title field'}</option
			>
		{/each}
	</select>
</div>
