<script lang="ts">
	import PocketBase from 'pocketbase';
	import DropdownActions from './DropdownActions.svelte';
	import {
		AppBreadcrumbs,
		AppCalendarDayView,
		AppCalendarMonthView,
		AppCalendarWeekView,
		AppCalendarYearView,
		ContentWrapperEditable
	} from '$lib/components';
	import { calendarView, currentDate } from '$lib/stores';
	import type { PageData } from './$types';
	import dayjs from 'dayjs';
	import type { Record } from 'pocketbase';
	import { browser } from '$app/environment';
	import { PUBLIC_POCKETBASE_URL } from '$env/static/public';

	export let data: PageData;
	let expenses: Record[] = [];
	let incomes: Record[] = [];
	let innerWidth = 0;
	let currentDay: string;
	let currentView: string;

	currentDate.subscribe((value) => {
		currentDay = dayjs(value).format('YYYY-MM-DD');
	});

	calendarView.subscribe((value) => {
		currentView = value;
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

	$: ({ categories, planner, allExpenses, allIncomes } = data);

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
