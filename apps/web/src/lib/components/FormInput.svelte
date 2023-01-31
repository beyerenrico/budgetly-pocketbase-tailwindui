<script lang="ts">
	export let label: string;
	export let id: string;
	export let value: string = '';
	export let placeholder: string = '';
	export let type: string = 'text';
	export let autocomplete: string = 'on';
	export let required: boolean = false;
	export let disabled: boolean = false;
</script>

<div class="w-full">
	<label for={id} class="block text-sm font-medium text-gray-700">{label}</label>
	<div class="mt-1">
		<input
			name={id}
			{id}
			{value}
			{placeholder}
			{type}
			{autocomplete}
			{required}
			{disabled}
			class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
		/>
	</div>
</div>
