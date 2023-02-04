<script lang="ts">
	import { calendarView, currentDate } from '$lib/stores';
	import { classNames, getWeekdays } from '$lib/utils';
	import { AppCalendarHeader, AppCalendarListItem } from '.';
	import isoWeek from 'dayjs/plugin/isoWeek';
	import dayjs, { type Dayjs } from 'dayjs';
	import { daysOfWeek } from '$lib/constants';
	import type { Record } from 'pocketbase';

	export let expenses: Record[];
	export let incomes: Record[];
	export let allExpenses: Record[];
	export let allIncomes: Record[];

	console.log(allExpenses);
	console.log(allIncomes);

	dayjs.extend(isoWeek);

	let currentDay: Dayjs;

	currentDate.subscribe((value) => {
		currentDay = value;
	});
</script>

<div class="flex flex-col h-0 min-h-[768px] overflow-hidden border rounded-lg">
	<AppCalendarHeader manipulator="week" showMonth={true} />
	<div class="flex flex-col flex-auto overflow-auto bg-white isolate">
		<div
			style="width: 165%"
			class="flex flex-col flex-none max-w-none overflow-hidden md:max-w-full"
		>
			<div
				class="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8"
			>
				<div class="grid grid-cols-7 text-sm leading-6 text-gray-500 sm:hidden">
					{#each getWeekdays(currentDay) as day}
						<button
							on:click={() => {
								currentDate.set(day);
								calendarView.set('day');
							}}
							type="button"
							class="flex flex-col items-center pt-2 pb-3 relative"
						>
							{daysOfWeek[day.isoWeekday()].charAt(0)}
							<span
								class={classNames(
									day.isSame(dayjs(), 'day') ? 'text-indigo-600' : 'text-gray-900',
									day.isSame(currentDay, 'day') && 'bg-gray-900 text-white',
									'flex items-center justify-center w-8 h-8 mt-1 font-semibold rounded-full'
								)}
							>
								{day.format('DD')}
							</span>
							<div class="w-full flex justify-center gap-1 absolute inset-x-0 bottom-[4px]">
								{#if allExpenses.filter((expense) => day.isSame(dayjs(expense.date), 'day')).length}
									<span class="mt-2 rounded-full h-[6px] w-[6px] bg-red-300" />
								{/if}
								{#if allIncomes.filter((income) => day.isSame(dayjs(income.date), 'day')).length}
									<span class="mt-2 rounded-full h-[6px] w-[6px] bg-green-300" />
								{/if}
							</div>
						</button>
					{/each}
				</div>

				<div
					class="hidden grid-cols-7 -mr-px text-sm leading-6 text-gray-500 border-r border-gray-100 divide-x divide-gray-100 sm:grid"
				>
					<div class="col-end-1 w-14 flex items-center justify-center">
						{dayjs(currentDay).isoWeek()}
					</div>

					{#each getWeekdays(currentDay) as day}
						<button
							on:click={() => {
								currentDate.set(day);
								calendarView.set('day');
							}}
							type="button"
							class="flex flex-col items-center pt-2 pb-3 relative"
						>
							{daysOfWeek[day.isoWeekday()].slice(0, 3)}
							<span
								class={classNames(
									day.isSame(dayjs(), 'day') ? 'text-indigo-600' : 'text-gray-900',
									day.isSame(currentDay, 'day') && 'bg-gray-900 text-white',
									'flex items-center justify-center w-8 h-8 mt-1 font-semibold rounded-full'
								)}
							>
								{day.format('DD')}
							</span>
							<div class="w-full flex justify-center gap-1 absolute inset-x-0 bottom-[4px]">
								{#if allExpenses.filter((expense) => day.isSame(dayjs(expense.date), 'day')).length}
									<span class="mt-2 rounded-full h-[6px] w-[6px] bg-red-300" />
								{/if}
								{#if allIncomes.filter((income) => day.isSame(dayjs(income.date), 'day')).length}
									<span class="mt-2 rounded-full h-[6px] w-[6px] bg-green-300" />
								{/if}
							</div>
						</button>
					{/each}
				</div>
			</div>
			<div class="flex flex-auto h-[680px] max-h-[680px] overflow-y-scroll rounded-lg">
				<div class="sticky left-0 z-10 flex-none bg-white sm:w-14 ring-1 ring-gray-100" />
				<div class="grid grid-cols-7 w-full border-r sm:mr-8 divide-x divide-gray-100 ">
					{#each getWeekdays(currentDay) as day}
						<div class="block w-full space-y-2 p-2">
							{#if allIncomes.filter((income) => day.isSame(dayjs(income.date), 'day')).length}
								<ol class="space-y-2">
									{#each allIncomes.filter( (income) => day.isSame(dayjs(income.date), 'day') ) as element}
										<AppCalendarListItem
											link="#"
											headline={element.name}
											subline={element.purpose}
											amount={element.amount}
											date={dayjs(day).format('YYYY-MM-DD')}
											type="income"
										/>
									{/each}
								</ol>
							{/if}
							{#if allExpenses.filter((expense) => day.isSame(dayjs(expense.date), 'day')).length}
								<ol class="space-y-2">
									{#each allExpenses.filter( (expense) => day.isSame(dayjs(expense.date), 'day') ) as element}
										<AppCalendarListItem
											link="#"
											headline={element.name}
											subline={element.purpose}
											amount={element.amount}
											date={dayjs(day).format('YYYY-MM-DD')}
											type="expense"
										/>
									{/each}
								</ol>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
