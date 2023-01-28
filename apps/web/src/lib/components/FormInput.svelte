<script>
	/**
	 * @type {string}
	 */
	export let label;

	/**
	 * @type {string}
	 */
	export let id;

	/**
	 * @type {string}
	 */
	export let value = '';

	/**
	 * @type {string}
	 */
	export let placeholder = '';

	/**
	 * @type {string}
	 */
	export let type = 'text';

	/**
	 * @type {string}
	 */
	export let autocomplete = 'on';

	/**
	 * @type {boolean}
	 */
	export let required = false;

	/**
	 * @type {boolean}
	 */
	export let disabled = false;
</script>

<div>
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
			class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
		/>
	</div>
</div>
