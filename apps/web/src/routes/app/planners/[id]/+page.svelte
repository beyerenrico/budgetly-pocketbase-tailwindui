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

	export let form: unknown;
	export let data: PageData;
	let loading = false;
	let innerWidth = 0;
	let currentView: string;
	let currentType: 'expense' | 'income';
	let currentCategory: Record['id'] | undefined;

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

	$: ({ planner, categories } = data);

	if (browser) {
		const pb = new PocketBase(PUBLIC_POCKETBASE_URL || 'http://localhost:8090');
		pb.collection('categories').subscribe('*', function (e) {
			categories.push(e.record);
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
	<svelte:component this={calendarViews[currentView]} />
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
