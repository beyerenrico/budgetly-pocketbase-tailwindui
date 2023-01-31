<script lang="ts">
	import { MenuItem } from '@rgossiaux/svelte-headlessui';
	import { AppMenuDropdown } from '.';
	import { calendarView } from '$lib/stores';
	import { views } from '$lib/constants';

	let currentView: string;

	calendarView.subscribe((value) => {
		currentView = value;
	});
</script>

<AppMenuDropdown
	label="{currentView.charAt(0).toUpperCase() + currentView.slice(1)} view"
	buttonStyles="flex items-center rounded-md border border-gray-300 bg-white py-2 pl-3 pr-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
>
	<div class="px-1 py-1">
		{#each views as element}
			<MenuItem let:active>
				<button
					on:click={() => calendarView.set(element.name)}
					type="button"
					class="group flex rounded-md items-center w-full px-2 py-2 text-sm
					{active ? 'text-gray-900 hover:bg-gray-50' : 'text-gray-600 hover:text-gray-900'} 
					{currentView === element.name ? 'bg-gray-100 hover:bg-gray-100' : ''}
					"
				>
					{element.label}
				</button>
			</MenuItem>
		{/each}
	</div>
</AppMenuDropdown>
