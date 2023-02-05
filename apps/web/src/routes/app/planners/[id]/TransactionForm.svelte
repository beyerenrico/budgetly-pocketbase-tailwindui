<script lang="ts">
	import {
		categorySlideOverEditMode,
		categorySlideOverOpen,
		currentPlanner,
		plannerSlideOverEditMode,
		plannerSlideOverRecord
	} from '$lib/stores';
	import { FormInput, FormSelect } from '$lib/components';
	import type { Record } from 'pocketbase';
	import dayjs from 'dayjs';

	export let selectedCategory: Record['id'] | undefined;
	export let categories: Record[];

	let plannerId: string | undefined;
	let isEditing: boolean = false;
	let editRecord: Record | undefined = undefined;

	currentPlanner.subscribe((value) => {
		plannerId = value;
	});

	plannerSlideOverEditMode.subscribe((value) => {
		isEditing = value;
	});

	plannerSlideOverRecord.subscribe((value) => {
		editRecord = value;
	});
</script>

<FormInput
	label="Name"
	type="text"
	id="name"
	value={isEditing && editRecord ? editRecord.name : ''}
/>
<FormInput
	label="Purpose"
	type="text"
	id="purpose"
	value={isEditing && editRecord ? editRecord.purpose : ''}
/>
<FormInput
	label="Booking Date"
	type="datetime-local"
	id="date"
	value={isEditing && editRecord ? dayjs(editRecord.date).format('YYYY-MM-DDTHH:mm') : ''}
/>
<FormSelect
	label="Category"
	id="category"
	elements={categories}
	selected={isEditing && editRecord ? editRecord.title : selectedCategory}
/>
<button
	on:click={() => {
		categorySlideOverOpen.set(true);
		categorySlideOverEditMode.set(false);
	}}
	type="button"
	class="text-blue-500 hover:text-blue-700 focus:outline-none focus:underline hover:underline"
>
	Create new category
</button>
<FormInput
	label="Amount"
	type="number"
	id="amount"
	step="0.01"
	value={isEditing && editRecord ? editRecord.amount : ''}
>
	<div slot="prepend" class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
		<span class="text-gray-500 sm:text-sm">€</span>
	</div>
	<div slot="append" class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
		<span class="text-gray-500 sm:text-sm" id="price-currency">EUR</span>
	</div>
</FormInput>
<input type="hidden" name="planner" value={plannerId} />
{#if isEditing && editRecord}
	<input type="hidden" name="id" value={editRecord.id} />
{/if}
