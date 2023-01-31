<script lang="ts">
	import dayjs, { type Dayjs } from 'dayjs';
	import { currentDate } from '$lib/stores';
	import { classNames, getMonths, getWeeks } from '$lib/utils';
	import { AppCalendarHeader } from '.';

	let currentDay: Dayjs;

	currentDate.subscribe((value) => {
		currentDay = value;
	});
</script>

<div class="border rounded-lg">
	<AppCalendarHeader manipulator="year" />
	<div class="grid grid-cols-1 gap-4 px-6 pb-6 md:grid-cols-2 xl:grid-cols-3">
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
								on:click={() => currentDate.set(day)}
								type="button"
								class={classNames(
									!day.isSame(month, 'month')
										? 'bg-gray-50 text-gray-400'
										: 'bg-white text-gray-900',
									'py-2 hover:bg-gray-100 focus:z-10'
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
							</button>
						{/each}
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
