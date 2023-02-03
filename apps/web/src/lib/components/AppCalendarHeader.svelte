<script lang="ts">
	import { views } from '$lib/constants';
	import { calendarView, currentDate } from '$lib/stores';
	import { classNames } from '$lib/utils';
	import { MenuItem } from '@rgossiaux/svelte-headlessui';
	import { ChevronLeft, ChevronRight, EllipsisHorizontal } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { Dayjs, ManipulateType } from 'dayjs';
	import { AppCalendarViewSelector, AppMenuDropdown } from '.';

	export let manipulator: ManipulateType;
	export let showDay: boolean = false;
	export let showMonth: boolean = false;

	let currentYear: Dayjs;

	currentDate.subscribe((value) => {
		currentYear = value;
	});

	let currentView: string;

	calendarView.subscribe((value) => {
		currentView = value;
	});
</script>

<header
	class="relative z-10 flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 rounded-t-lg"
>
	<h1 class="text-lg font-semibold text-gray-900">
		<time
			datetime={showDay
				? currentYear.format('D. MMMM YYYY')
				: showMonth
				? currentYear.format('MMMM YYYY')
				: currentYear.format('YYYY')}
			>{showDay
				? currentYear.format('dddd, D. MMMM YYYY')
				: showMonth
				? currentYear.format('MMMM YYYY')
				: currentYear.format('YYYY')}</time
		>
	</h1>
	<div class="flex items-center">
		<div class="flex items-center rounded-md shadow-sm md:items-stretch">
			<button
				on:click={() => currentDate.subtract(1, manipulator)}
				type="button"
				class="flex items-center justify-center py-2 pl-3 pr-4 text-gray-400 bg-white border border-r-0 border-gray-300 rounded-l-md hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
			>
				<span class="sr-only">Previous</span>
				<Icon src={ChevronLeft} theme="mini" class="w-5 h-5" />
			</button>
			<button
				on:click={currentDate.reset}
				type="button"
				class="hidden border-t border-b border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block"
				>Today</button
			>
			<span class="relative w-px h-5 -mx-px bg-gray-300 md:hidden" />
			<button
				on:click={() => currentDate.add(1, manipulator)}
				type="button"
				class="flex items-center justify-center py-2 pl-4 pr-3 text-gray-400 bg-white border border-l-0 border-gray-300 rounded-r-md hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
			>
				<span class="sr-only">Next</span>
				<Icon src={ChevronRight} theme="mini" class="w-5 h-5" />
			</button>
		</div>
		<div class="hidden md:ml-4 md:flex md:items-center">
			<div class="relative">
				<AppCalendarViewSelector />
			</div>
		</div>
		<div class="relative ml-6 md:hidden">
			<AppMenuDropdown
				buttonStyles="flex items-center p-2 -mx-2 text-gray-400 border border-transparent rounded-full hover:text-gray-500"
			>
				<div class="py-1" role="none">
					<MenuItem let:active>
						<button
							on:click={() => currentDate.reset()}
							class={classNames(
								active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
								'w-full block px-4 py-2 text-sm text-left'
							)}
						>
							Go to today
						</button>
					</MenuItem>
				</div>
				<div class="py-1" role="none">
					{#each views as element}
						<MenuItem let:active>
							<button
								on:click={() => calendarView.set(element.name)}
								type="button"
								class={classNames(
									active ? 'text-gray-900 hover:bg-gray-50' : 'text-gray-600 hover:text-gray-900',
									currentView === element.name ? 'bg-gray-100 hover:bg-gray-100' : '',
									'w-full block px-4 py-2 text-sm text-left'
								)}
							>
								{element.label} view
							</button>
						</MenuItem>
					{/each}
				</div>
				<svelte:fragment slot="buttonContent">
					<Icon src={EllipsisHorizontal} class="w-5 h-5" />
				</svelte:fragment>
			</AppMenuDropdown>
		</div>
	</div>
</header>
