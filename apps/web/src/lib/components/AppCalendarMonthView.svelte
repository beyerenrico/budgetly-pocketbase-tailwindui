<script lang="ts">
	import dayjs, { type Dayjs } from 'dayjs';
	import { currentDate } from '$lib/stores';
	import { classNames, getWeeks } from '$lib/utils';
	import { AppCalendarHeader } from '.';

	let currentDay: Dayjs;

	currentDate.subscribe((value) => {
		currentDay = value;
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
							on:click={() => currentDate.set(day)}
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
									'flex h-6 w-6 items-center justify-center rounded-full'
								)}
							>
								{day.format('DD')}
							</time>
							<!-- {day.events.length > 0 && (
								<ol className="mt-2">
									{day.events.slice(0, 2).map((event) => (
										<li key={event.id}>
											<a href={event.href} className="group flex">
												<p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
													{event.name}
												</p>
												<time
													dateTime={event.datetime}
													className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
												>
													{event.time}
												</time>
											</a>
										</li>
									))}
									{day.events.length > 2 && <li className="text-gray-500">+ {day.events.length - 2} more</li>}
								</ol>
							)} -->
						</button>
					{/each}
				{/each}
			</div>
			<div class="grid w-full grid-cols-7 grid-rows-6 gap-px isolate lg:hidden">
				{#each getWeeks(currentDay) as week}
					{#each week as day}
						<button
							on:click={() => currentDate.set(day)}
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
								'flex h-14 flex-col py-2 px-3 hover:bg-gray-100 focus:z-10'
							)}
						>
							<time
								datetime={day.format('YYYY-MM-DD')}
								class={classNames(
									day.isSame(currentDay, 'day') &&
										'flex h-6 w-6 items-center justify-center rounded-full',
									day.isSame(currentDay, 'day') && day.isSame(dayjs(), 'day') && 'bg-indigo-600',
									day.isSame(currentDay, 'day') && !day.isSame(dayjs(), 'day') && 'bg-gray-900',
									'ml-auto'
								)}
							>
								{day.format('D')}
							</time>
							<!-- <span className="sr-only">{day.events.length} events</span>
							{day.events.length > 0 && (
								<span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
									{day.events.map((event) => (
										<span key={event.id} className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
									))}
								</span>
							)} -->
						</button>
					{/each}
				{/each}
			</div>
		</div>
	</div>
	<div class="px-4 py-10 sm:px-6 lg:hidden">
		<ol
			class="overflow-hidden text-sm bg-white divide-y divide-gray-100 rounded-lg shadow ring-1 ring-black ring-opacity-5"
		>
			<li class="flex p-4 pr-6 group focus-within:bg-gray-50 hover:bg-gray-50">
				<div class="flex-auto">
					<p class="font-semibold text-gray-900">Maple syrup museum</p>
					<time datetime="2022-01-15T09:00" class="flex items-center mt-2 text-gray-700">
						<!-- Heroicon name: mini/clock -->
						<svg
							class="w-5 h-5 mr-2 text-gray-400"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
								clip-rule="evenodd"
							/>
						</svg>
						3PM
					</time>
				</div>
				<a
					href="#"
					class="self-center flex-none px-3 py-2 ml-6 font-semibold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm opacity-0 hover:bg-gray-50 focus:opacity-100 group-hover:opacity-100"
					>Edit<span class="sr-only">, Maple syrup museum</span></a
				>
			</li>

			<li class="flex p-4 pr-6 group focus-within:bg-gray-50 hover:bg-gray-50">
				<div class="flex-auto">
					<p class="font-semibold text-gray-900">Hockey game</p>
					<time datetime="2022-01-22T19:00" class="flex items-center mt-2 text-gray-700">
						<!-- Heroicon name: mini/clock -->
						<svg
							class="w-5 h-5 mr-2 text-gray-400"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
								clip-rule="evenodd"
							/>
						</svg>
						7PM
					</time>
				</div>
				<a
					href="#"
					class="self-center flex-none px-3 py-2 ml-6 font-semibold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm opacity-0 hover:bg-gray-50 focus:opacity-100 group-hover:opacity-100"
					>Edit<span class="sr-only">, Hockey game</span></a
				>
			</li>
		</ol>
	</div>
</div>
