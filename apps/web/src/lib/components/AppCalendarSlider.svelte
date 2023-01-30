<script>
	import dayjs from 'dayjs';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ChevronLeft, ChevronRight } from '@steeze-ui/heroicons';

	let selectedDate = dayjs();
	let currentDay;

	const handleDateSelect = (selected) => {
		selectedDate = selected;
	};

	const handlePrevMonth = () => {
		selectedDate = selectedDate.subtract(1, 'month');
	};

	const handleNextMonth = () => {
		selectedDate = selectedDate.add(1, 'month');
	};

	const getWeeks = (month) => {
		const firstDay = dayjs(month).startOf('month').startOf('week');
		const lastDay = dayjs(month).endOf('month').endOf('week');

		const weeks = [];
		let currentWeek = [];
		let currentDay = firstDay;

		while (currentDay <= lastDay) {
			currentWeek.push(currentDay);

			if (currentDay.day() === 6) {
				weeks.push(currentWeek);
				currentWeek = [];
			}

			currentDay = currentDay.add(1, 'day');
		}

		return weeks;
	};

	$: currentDay = dayjs(selectedDate).format('YYYY-MM-DD');
</script>

<div class="text-center">
	<div class="flex items-center text-center text-gray-900">
		<button
			on:click={handlePrevMonth}
			type="button"
			class="-mr-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
		>
			<span class="sr-only">Previous month</span>
			<Icon src={ChevronLeft} theme="mini" class="h-5 w-5" />
		</button>
		<div class="flex-auto font-semibold">{selectedDate.format('MMMM YYYY')}</div>
		<button
			on:click={handleNextMonth}
			type="button"
			class="-mr-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
		>
			<span class="sr-only">Next month</span>
			<Icon src={ChevronRight} theme="mini" class="h-5 w-5" />
		</button>
	</div>
	<div class="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
		{#each ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as element}
			<div>
				{element.charAt(0)}
				<div class="sr-only">{element}</div>
			</div>
		{/each}
	</div>
	<div
		class="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200 overflow-hidden"
	>
		{#each getWeeks(selectedDate) as week}
			{#each week as day}
				<button
					type="button"
					class="py-2 hover:bg-gray-100 focus:z-10 
							{!day.isSame(selectedDate, 'month') ? 'bg-gray-50 text-gray-400' : 'bg-white text-gray-900'}"
					on:click={() => handleDateSelect(day)}
				>
					<time
						datetime={day.format('YYYY-MM-DD')}
						class="mx-auto flex h-7 w-7 items-center justify-center rounded-full 
								{day.isSame(selectedDate, 'day') ? 'bg-gray-900 text-white' : ''} 
								{day.isSame(dayjs(), 'day') ? 'bg-indigo-600 font-semibold text-white' : ''}"
						>{day.format('D')}</time
					>
				</button>
			{/each}
		{/each}
	</div>
</div>
