<script lang="ts">
	import dayjs, { type Dayjs } from 'dayjs';
	import { calendarView, currentDate, currentPlanner } from '$lib/stores';
	import { classNames, getWeeks } from '$lib/utils';
	import { AppCalendarHeader } from '.';
	import type { Record } from 'pocketbase';

	export let expenses: Record[];
	export let incomes: Record[];
	export let allExpenses: Record[];
	export let allIncomes: Record[];

	let currentDay: Dayjs;
	currentDate.subscribe((value) => {
		currentDay = value;
	});

	let plannerId: string;
	currentPlanner.subscribe((value) => {
		plannerId = value || '';
	});
</script>

<div class="overflow-hidden border rounded-lg lg:flex lg:h-full lg:flex-col">
	<AppCalendarHeader manipulator="month" showMonth={true} />
	<div class="ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
		<div
			class="grid grid-cols-7 gap-px text-xs font-semibold leading-6 text-center text-gray-700 bg-gray-200 border-b border-gray-300 lg:flex-none"
		>
			{#each ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as element}
				<div class="flex justify-center py-2 bg-white">
					<span>{element.charAt(0)}</span>
					<span class="sr-only">{element}</span>
					<span class="sm:not-sr-only">{element.slice(1, 3)}</span>
				</div>
			{/each}
		</div>
		<div class="flex text-xs leading-6 text-gray-700 bg-gray-200 lg:flex-auto">
			<div class="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
				{#each getWeeks(currentDay) as week}
					{#each week as day}
						<button
							on:click={() => {
								currentDate.set(day);
								calendarView.set('day');
							}}
							type="button"
							class={classNames(
								day.isSame(currentDay, 'month') ? 'bg-white' : 'bg-gray-50 text-gray-500',
								'flex min-h-[6rem] relative py-2 px-3'
							)}
						>
							<time
								datetime={day.format('YYYY-MM-DD')}
								class={classNames(
									day.isSame(dayjs(), 'day') && ' text-indigo-600 font-semibold',
									day.isSame(currentDay, 'day') && 'bg-gray-900 text-white',
									'flex h-6 w-6 items-center justify-center rounded-full shrink-0'
								)}
							>
								{day.format('DD')}
							</time>

							<div class="w-full flex justify-start gap-1 absolute bottom-2">
								{#if allExpenses.filter((expense) => day.isSame(dayjs(expense.date), 'day')).length}
									<span class="mt-2 rounded-full h-[6px] w-[6px] bg-red-300" />
								{/if}
								{#if allIncomes.filter((income) => day.isSame(dayjs(income.date), 'day')).length}
									<span class="mt-2 rounded-full h-[6px] w-[6px] bg-green-300" />
								{/if}
							</div>
						</button>
					{/each}
				{/each}
			</div>
			<div class="grid w-full grid-cols-7 grid-rows-6 gap-px isolate lg:hidden">
				{#each getWeeks(currentDay) as week}
					{#each week as day}
						<button
							on:click={() => {
								currentDate.set(day);
								calendarView.set('day');
							}}
							type="button"
							class={classNames(
								day.isSame(currentDay, 'month') ? 'bg-white' : 'bg-gray-50',
								(day.isSame(currentDay, 'day') || day.isSame(dayjs(), 'day')) && 'font-semibold',
								day.isSame(currentDay, 'day') && 'text-white',
								!day.isSame(currentDay, 'day') && day.isSame(dayjs(), 'day') && 'text-indigo-600',
								!day.isSame(currentDay, 'day') &&
									day.isSame(currentDay, 'month') &&
									!day.isSame(dayjs(), 'day') &&
									'text-gray-900',
								!day.isSame(currentDay, 'day') &&
									!day.isSame(currentDay, 'month') &&
									!day.isSame(dayjs(), 'day') &&
									'text-gray-500',
								'flex h-14 flex-col py-2 px-3 hover:bg-gray-100 focus:z-10 relative'
							)}
						>
							<time
								datetime={day.format('YYYY-MM-DD')}
								class={classNames(
									day.isSame(currentDay, 'day') &&
										'flex h-6 w-6 items-center justify-center rounded-full',
									day.isSame(currentDay, 'day') && day.isSame(dayjs(), 'day') && 'bg-indigo-600',
									day.isSame(currentDay, 'day') && !day.isSame(dayjs(), 'day') && 'bg-gray-900',
									'ml-auto shrink-0'
								)}
							>
								{day.format('D')}
							</time>

							<div class="w-full flex justify-start gap-1">
								{#if allExpenses.filter((expense) => day.isSame(dayjs(expense.date), 'day')).length}
									<span class="mt-2 rounded-full h-[6px] w-[6px] bg-red-300" />
								{/if}
								{#if allIncomes.filter((income) => day.isSame(dayjs(income.date), 'day')).length}
									<span class="mt-2 rounded-full h-[6px] w-[6px] bg-green-300" />
								{/if}
							</div>
						</button>
					{/each}
				{/each}
			</div>
		</div>
	</div>
</div>
