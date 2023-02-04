<script lang="ts">
	import PocketBase from 'pocketbase';
	import {
		categorySlideOverOpen,
		currentDate,
		currentPlanner,
		plannerSlideOverOpen,
		plannerSlideOverType,
		recentlyCreatedCategory
	} from '$lib/stores';
	import { page } from '$app/stores';
	import type { Record } from 'pocketbase';
	import { AppSlideOver } from '$lib/components';
	import ExpenseForm from './ExpenseForm.svelte';
	import IncomeForm from './IncomeForm.svelte';
	import CategoryForm from './CategoryForm.svelte';
	import { captilizeFirstLetter } from '$lib/utils';
	import { browser } from '$app/environment';
	import type { LayoutData } from './$types';
	import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
	import dayjs from 'dayjs';
	import type { SubmitFunction } from '$app/forms';

	export let form: unknown;
	export let data: LayoutData;
	let expenses: Record[] = [];
	let incomes: Record[] = [];
	let currentType: 'expense' | 'income';
	let loading = false;
	let currentCategory: Record['id'] | undefined;

	currentPlanner.set($page.params.id);

	plannerSlideOverType.subscribe((value) => {
		currentType = value;
	});

	recentlyCreatedCategory.subscribe((value) => {
		currentCategory = value?.id ?? undefined;
	});

	$: ({ categories } = data);

	if (browser) {
		const pb = new PocketBase(PUBLIC_POCKETBASE_URL || 'http://localhost:8090');

		pb.collection('categories').subscribe('*', function (e) {
			categories.push(e.record);
		});

		currentDate.subscribe((value) => {
			pb.collection('expenses')
				.getFullList()
				.then((records) => {
					expenses = records.filter((record) => {
						return dayjs(record.date).format('YYYY-MM-DD') === dayjs(value).format('YYYY-MM-DD');
					});
				});

			pb.collection('incomes')
				.getFullList()
				.then((records) => {
					incomes = records.filter((record) => {
						return dayjs(record.date).format('YYYY-MM-DD') === dayjs(value).format('YYYY-MM-DD');
					});
				});
		});
	}

	const enhancePlannerSlideOver: SubmitFunction = () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					await update();
					break;
				case 'error':
					break;
				default:
					await update();
			}

			loading = false;
		};
	};
</script>

<slot />

<AppSlideOver
	storeElement={plannerSlideOverOpen}
	headline="New {captilizeFirstLetter(currentType)}"
	enhancementFunction={enhancePlannerSlideOver}
	action="?/create{captilizeFirstLetter(currentType)}"
>
	{#if currentType === 'expense'}
		<ExpenseForm {categories} selectedCategory={form?.category?.id} />
	{:else if currentType === 'income'}
		<IncomeForm {categories} selectedCategory={form?.category?.id} />
	{/if}
</AppSlideOver>
<AppSlideOver
	storeElement={categorySlideOverOpen}
	headline="New category"
	action="?/createCategory"
>
	<CategoryForm />
</AppSlideOver>
