<script lang="ts">
	import dayjs, { type Dayjs } from 'dayjs';
	import { calendarView, currentDate } from '$lib/stores';
	import { classNames, getMonths, getWeeks } from '$lib/utils';
	import { AppCalendarHeader, AppCalendarSlider } from '.';
	import type { Record } from 'pocketbase';

	export let expenses: Record[];
	export let incomes: Record[];
	export let allExpenses: Record[];
	export let allIncomes: Record[];

	let currentDay: Dayjs;

	currentDate.subscribe((value) => {
		currentDay = value;
	});
</script>

<div class="border rounded-lg">
	<AppCalendarHeader manipulator="year" />
	<div
		class="grid grid-cols-1 gap-4 px-6 pb-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 bg-white rounded-b-lg"
	>
		{#each getMonths(currentDay) as month}
			<div class="pt-8 text-center">
				<div class="flex items-center text-center text-gray-900">
					<div class="flex-auto font-semibold">{month.format('MMMM')}</div>
				</div>
				<div class="grid grid-cols-7 mt-6 text-xs leading-6 text-gray-500">
					{#each ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as element}
						<div>
							{element.charAt(0)}
							<div class="sr-only">{element}</div>
						</div>
					{/each}
				</div>
				<div
					class="grid grid-cols-7 grid-rows-6 gap-px mt-2 overflow-hidden text-sm bg-gray-200 rounded-lg shadow isolate ring-1 ring-gray-200"
				>
					{#each getWeeks(month) as week}
						{#each week as day}
							<button
								on:click={() => {
									currentDate.set(day);
									calendarView.set('day');
								}}
								type="button"
								class={classNames(
									!day.isSame(month, 'month')
										? 'bg-gray-50 text-gray-400'
										: 'bg-white text-gray-900',
									'py-2 hover:bg-gray-100 focus:z-10 relative'
								)}
							>
								<time
									datetime={day.format('YYYY-MM-DD')}
									class={classNames(
										day.isSame(dayjs(), 'day') && day.isSame(month, 'month')
											? 'text-indigo-600 font-semibold '
											: '',
										day.isSame(currentDay, 'day') && day.isSame(month, 'month')
											? 'bg-gray-900 font-semibold text-white'
											: '',
										'mx-auto flex h-7 w-7 items-center justify-center rounded-full'
									)}>{day.format('D')}</time
								>
								<div class="w-full flex justify-start gap-1 absolute bottom-[2px] left-[2px]">
									{#if allExpenses.filter( (expense) => day.isSame(dayjs(expense.date), 'day') ).length}
										<span class="mt-2 rounded-full h-[4px] w-[4px] bg-red-300" />
									{/if}
									{#if allIncomes.filter((income) => day.isSame(dayjs(income.date), 'day')).length}
										<span class="mt-2 rounded-full h-[4px] w-[4px] bg-green-300" />
									{/if}
								</div>
							</button>
						{/each}
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
