<script lang="ts">
	import DropdownActions from './DropdownActions.svelte';
	import { browser } from '$app/environment';
	import type { SubmitFunction } from '$app/forms';
	import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
	import {
		AppBreadcrumbs,
		AppCalendarDayView,
		AppCalendarMonthView,
		AppCalendarWeekView,
		AppCalendarYearView,
		AppSlideOver,
		ContentWrapperEditable
	} from '$lib/components';
	import {
		calendarView,
		categorySlideOverOpen,
		currentDate,
		plannerSlideOverOpen,
		plannerSlideOverType,
		recentlyCreatedCategory
	} from '$lib/stores';
	import { captilizeFirstLetter } from '$lib/utils';
	import PocketBase, { Record } from 'pocketbase';
	import type { PageData } from './$types';
	import CategoryForm from './CategoryForm.svelte';
	import ExpenseForm from './ExpenseForm.svelte';
	import IncomeForm from './IncomeForm.svelte';
	import dayjs from 'dayjs';

	export let form: unknown;
	export let data: PageData;
	let expenses: Record[] = [];
	let incomes: Record[] = [];
	let loading = false;
	let innerWidth = 0;
	let currentDay: string;
	let currentView: string;
	let currentType: 'expense' | 'income';
	let currentCategory: Record['id'] | undefined;

	currentDate.subscribe((value) => {
		currentDay = dayjs(value).format('YYYY-MM-DD');
	});

	calendarView.subscribe((value) => {
		currentView = value;
	});

	plannerSlideOverType.subscribe((value) => {
		currentType = value;
	});

	recentlyCreatedCategory.subscribe((value) => {
		currentCategory = value?.id ?? undefined;
	});

	const breadcrumbElements = [
		{
			title: 'Planners',
			href: '/app/planners'
		},
		{
			title: data?.planner?.title,
			href: `/app/planners/${data?.planner?.id}`
		}
	];

	const calendarViews: {
		[key: string]:
			| typeof AppCalendarDayView
			| typeof AppCalendarWeekView
			| typeof AppCalendarMonthView
			| typeof AppCalendarYearView;
	} = {
		day: AppCalendarDayView,
		week: AppCalendarWeekView,
		month: AppCalendarMonthView,
		year: AppCalendarYearView
	};

	$: ({ planner, categories, allExpenses, allIncomes } = data);

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

<svelte:window bind:innerWidth />

<AppBreadcrumbs {breadcrumbElements} />

<ContentWrapperEditable
	headline={planner?.title}
	description={planner?.description}
	withAction={true}
	actionLabel="Add"
>
	<h3 class="text-lg font-medium mb-4">Calendar</h3>
	<svelte:component
		this={calendarViews[currentView]}
		{expenses}
		{incomes}
		{allExpenses}
		{allIncomes}
	/>
	<svelte:fragment slot="action">
		<div class="flex justify-end gap-2">
			<DropdownActions {planner} />
		</div>
	</svelte:fragment>
</ContentWrapperEditable>

<AppSlideOver
	storeElement={plannerSlideOverOpen}
	headline="New {captilizeFirstLetter(currentType)}"
	enhancementFunction={enhancePlannerSlideOver}
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
