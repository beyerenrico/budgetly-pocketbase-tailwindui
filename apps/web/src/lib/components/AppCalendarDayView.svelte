<script lang="ts">
	import { AppCalendarHeader, AppCalendarListItem, AppCalendarSlider } from '.';
	import { currentDate } from '$lib/stores';
	import { classNames, getWeekdays } from '$lib/utils';
	import isoWeek from 'dayjs/plugin/isoWeek';
	import dayjs, { type Dayjs } from 'dayjs';
	import { daysOfWeek } from '$lib/constants';
	import type { Record } from 'pocketbase';

	export let expenses: Record[];
	export let incomes: Record[];
	export let allExpenses: Record[];
	export let allIncomes: Record[];

	dayjs.extend(isoWeek);

	let currentDay: Dayjs;

	currentDate.subscribe((value) => {
		currentDay = value;
	});
</script>

<div class="flex flex-col h-full overflow-hidden border rounded-lg">
	<AppCalendarHeader manipulator="day" showDay={true} />
	<div class="isolate flex flex-auto overflow-hidden bg-white h-[768px]">
		<div class="flex flex-col flex-auto overflow-auto">
			<div
				class="sticky top-0 z-10 grid flex-none grid-cols-7 text-sm text-gray-500 bg-white shadow ring-1 ring-black ring-opacity-5 md:hidden"
			>
				{#each getWeekdays(currentDay) as day}
					<button
						on:click={() => currentDate.set(day)}
						type="submit"
						class="flex flex-col items-center pt-2 pb-3 relative"
					>
						<span>{daysOfWeek[day.isoWeekday()].charAt(0)}</span>
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
			<div class="flex flex-auto w-full">
				<div class="flex-none bg-white w-8 lg:w-14 ring-1 ring-gray-100" />
				<div class="block w-full space-y-2 p-2">
					{#if incomes.length}
						<ol class="space-y-2">
							{#each incomes as element}
								<AppCalendarListItem
									link="#"
									headline={element.name}
									subline={element.purpose}
									amount={element.amount}
									date={element.date}
									type="income"
								/>
							{/each}
						</ol>
					{:else}
						<ol>
							<li class="relative flex">
								<div
									class="flex flex-col p-2 overflow-y-auto text-xs leading-5 rounded-lg bg-green-50 hover:bg-green-100 w-full"
								>
									<div class="flex order-1 my-1 w-full justify-between items-end">
										<div>
											<p class="font-semibold text-green-700">
												We couldnt' find any income for this day.
											</p>
										</div>
									</div>
								</div>
							</li>
						</ol>
					{/if}
					{#if expenses.length}
						<ol class="space-y-2">
							{#each expenses as element}
								<AppCalendarListItem
									link="#"
									headline={element.name}
									subline={element.purpose}
									amount={element.amount}
									date={element.date}
									type="expense"
								/>
							{/each}
						</ol>
					{:else}
						<ol>
							<li class="relative flex">
								<div
									class="flex flex-col p-2 overflow-y-auto text-xs leading-5 rounded-lg bg-red-50 hover:bg-red-100 w-full"
								>
									<div class="flex order-1 my-1 w-full justify-between items-end">
										<div>
											<p class="font-semibold text-red-700">
												We couldnt' find any expenses for this day.
											</p>
										</div>
									</div>
								</div>
							</li>
						</ol>
					{/if}
				</div>
			</div>
		</div>
		<div class="flex-none hidden w-1/2 max-w-md px-8 py-10 border-l border-gray-100 md:block">
			<AppCalendarSlider {allExpenses} {allIncomes} />
		</div>
	</div>
</div>
