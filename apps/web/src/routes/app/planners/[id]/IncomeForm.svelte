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

<FormInput label="Name" type="text" id="name" />
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
<input type="hidden" name="planner" value={plannerId} />
