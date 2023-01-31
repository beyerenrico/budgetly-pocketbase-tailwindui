<script lang="ts">
	import type { PageData } from './$types';
	import { calendarView } from '$lib/stores';
	import { MenuItem } from '@rgossiaux/svelte-headlessui';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { EllipsisVertical, Scale, Trash, Wallet } from '@steeze-ui/heroicons';
	import {
		AppBreadcrumbs,
		AppCalendarDayView,
		AppCalendarMonthView,
		AppCalendarWeekView,
		AppCalendarYearView,
		AppMenuDropdown,
		ContentWrapperEditable
	} from '$lib/components';

	export let data: PageData;
	let innerWidth = 0;
	let currentView: string;

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

	const calendarViews: Record<string, any> = {
		day: AppCalendarDayView,
		week: AppCalendarWeekView,
		month: AppCalendarMonthView,
		year: AppCalendarYearView
	};

	$: ({ planner } = data);
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
			<AppMenuDropdown
				label="Add"
				buttonStyles="inline-flex justify-center w-full px-4 py-2 items-center rounded-md border border-transparent bg-indigo-600 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
			>
				<div class="px-1 py-1">
					<MenuItem let:active>
						<form action="/auth/logout" method="POST">
							<button
								class="{active
									? 'text-gray-900 hover:bg-gray-50'
									: 'text-gray-600 hover:text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm"
							>
								<Icon
									src={Scale}
									theme="mini"
									class="w-4 h-4 mr-2 {active ? 'text-gray-500' : 'text-gray-400'}"
								/>
								Expense
							</button>
						</form>
					</MenuItem>
					<MenuItem let:active>
						<form action="/auth/logout" method="POST">
							<button
								class="{active
									? 'text-gray-900 hover:bg-gray-50'
									: 'text-gray-600 hover:text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm"
							>
								<Icon
									src={Wallet}
									theme="mini"
									class="w-4 h-4 mr-2 {active ? 'text-gray-500' : 'text-gray-400'}"
								/>
								Income
							</button>
						</form>
					</MenuItem>
				</div>
			</AppMenuDropdown>
			<AppMenuDropdown
				buttonStyles="inline-flex justify-center w-full px-2 py-2 items-center rounded-md border border-transparent text-sm font-medium text-gray-900 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
			>
				<div class="px-1 py-1">
					<MenuItem let:active>
						<form action="?/deletePlanner" method="POST">
							<button
								class="{active
									? 'text-gray-900 hover:bg-gray-50'
									: 'text-gray-600 hover:text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm"
							>
								<Icon
									src={Trash}
									theme="mini"
									class="w-4 h-4 mr-2 {active ? 'text-gray-500' : 'text-gray-400'}"
								/>
								Delete
							</button>
							<input type="hidden" name="id" value={planner.id} />
						</form>
					</MenuItem>
				</div>
				<svelte:fragment slot="buttonContent">
					<Icon src={EllipsisVertical} class="w-5 h-5" />
				</svelte:fragment>
			</AppMenuDropdown>
		</div>
	</svelte:fragment>
</ContentWrapperEditable>
