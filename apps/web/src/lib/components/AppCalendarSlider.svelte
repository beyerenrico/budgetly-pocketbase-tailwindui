<script lang="ts">
	import dayjs, { Dayjs } from 'dayjs';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ChevronLeft, ChevronRight } from '@steeze-ui/heroicons';
	import { currentDate } from '$lib/stores';
	import { classNames, getWeeks } from '$lib/utils';

	let currentDay: Dayjs;

	currentDate.subscribe((value) => {
		currentDay = value;
	});
</script>

<div class="text-center">
	<div class="flex items-center text-center text-gray-900">
		<button
			on:click={() => currentDate.subtract(1, 'month')}
			type="button"
			class="-mr-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
		>
			<span class="sr-only">Previous month</span>
			<Icon src={ChevronLeft} theme="mini" class="w-5 h-5" />
		</button>
		<div class="flex-auto font-semibold">{currentDay.format('MMMM YYYY')}</div>
		<button
			on:click={() => currentDate.add(1, 'month')}
			type="button"
			class="-mr-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
		>
			<span class="sr-only">Next month</span>
			<Icon src={ChevronRight} theme="mini" class="w-5 h-5" />
		</button>
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
		class="grid grid-cols-7 gap-px mt-2 overflow-hidden text-sm bg-gray-200 rounded-lg shadow isolate ring-1 ring-gray-200"
	>
		{#each getWeeks(currentDay) as week}
			{#each week as day}
				<button
					type="button"
					class="py-2 hover:bg-gray-100 focus:z-10 
						{!day.isSame(currentDay, 'month') ? 'bg-gray-50 text-gray-400' : 'bg-white text-gray-900'}"
					on:click={() => currentDate.set(day)}
				>
					<time
						datetime={day.format('YYYY-MM-DD')}
						class={classNames(
							day.isSame(currentDay, 'day') ? 'bg-gray-900 text-white' : '',
							day.isSame(dayjs(), 'day') ? 'text-indigo-600 font-semibold' : '',
							'mx-auto flex h-7 w-7 items-center justify-center rounded-full'
						)}>{day.format('D')}</time
					>
				</button>
			{/each}
		{/each}
	</div>
</div>
