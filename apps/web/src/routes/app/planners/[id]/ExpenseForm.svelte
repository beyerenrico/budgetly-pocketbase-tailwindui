<script lang="ts">
	import { categorySlideOverOpen, currentPlanner, plannerSlideOverOpen } from '$lib/stores';
	import { FormInput, FormSelect } from '$lib/components';
	import type { Record } from 'pocketbase';

	export let selectedCategory: Record['id'] | undefined;
	export let categories: Record[];
	let plannerId: string | undefined;

	currentPlanner.subscribe((value) => {
		plannerId = value;
	});
</script>

<FormInput label="Sender" type="text" id="sender" />
<FormInput label="Purpose" type="text" id="purpose" />
<FormInput label="Booking Date" type="datetime-local" id="date" />
<FormSelect label="Category" id="category" elements={categories} selected={selectedCategory} />
<button
	on:click={() => categorySlideOverOpen.set(true)}
	type="button"
	class="text-blue-500 hover:text-blue-700 focus:outline-none focus:underline hover:underline"
>
	Create new category
</button>
<FormInput label="Amount" type="number" id="amount" step="0.01">
	<div slot="prepend" class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
		<span class="text-gray-500 sm:text-sm">€</span>
	</div>
	<div slot="append" class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
		<span class="text-gray-500 sm:text-sm" id="price-currency">EUR</span>
	</div>
</FormInput>
<button
	on:click={() => plannerSlideOverOpen.set(false)}
	formaction="?/createExpense"
	type="submit"
	class="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
>
	Save
</button>
<input type="hidden" name="planner" value={plannerId} />
