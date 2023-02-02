<script lang="ts">
	import { AppMenuDropdown } from '$lib/components';
	import { currentPlanner, plannerSlideOverOpen, plannerSlideOverType } from '$lib/stores';
	import { MenuItem } from '@rgossiaux/svelte-headlessui';
	import { EllipsisVertical, Scale, Trash, Wallet } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { Record } from 'pocketbase';

	export let planner: Record;
</script>

<AppMenuDropdown
	label="Add"
	buttonStyles="inline-flex justify-center w-full px-4 py-2 items-center rounded-md border border-transparent bg-indigo-600 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
>
	<div class="px-1 py-1">
		<MenuItem let:active>
			<button
				on:click={() => {
					plannerSlideOverOpen.set(true);
					plannerSlideOverType.set('expense');
					currentPlanner.set(planner.id);
				}}
				type="button"
				class="{active
					? 'text-gray-900 hover:bg-gray-50'
					: 'text-gray-600 hover:text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm"
			>
				<Icon
					src={Scale}
					theme="mini"
					class="w-4 h-4 mr-2 {active ? 'text-gray-500' : 'text-gray-400'}"
				/>
				Expense
			</button>
		</MenuItem>
		<MenuItem let:active>
			<button
				on:click={() => {
					plannerSlideOverOpen.set(true);
					plannerSlideOverType.set('income');
					currentPlanner.set(planner.id);
				}}
				type="button"
				class="{active
					? 'text-gray-900 hover:bg-gray-50'
					: 'text-gray-600 hover:text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm"
			>
				<Icon
					src={Wallet}
					theme="mini"
					class="w-4 h-4 mr-2 {active ? 'text-gray-500' : 'text-gray-400'}"
				/>
				Income
			</button>
		</MenuItem>
	</div>
</AppMenuDropdown>
<AppMenuDropdown
	buttonStyles="inline-flex justify-center w-full px-2 py-2 items-center rounded-md border border-transparent text-sm font-medium text-gray-900 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
>
	<div class="px-1 py-1">
		<MenuItem let:active>
			<form action="?/deletePlanner" method="POST">
				<button
					class="{active
						? 'text-gray-900 hover:bg-gray-50'
						: 'text-gray-600 hover:text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm"
				>
					<Icon
						src={Trash}
						theme="mini"
						class="w-4 h-4 mr-2 {active ? 'text-gray-500' : 'text-gray-400'}"
					/>
					Delete
				</button>
				<input type="hidden" name="id" value={planner.id} />
			</form>
		</MenuItem>
	</div>
	<svelte:fragment slot="buttonContent">
		<Icon src={EllipsisVertical} class="w-5 h-5" />
	</svelte:fragment>
</AppMenuDropdown>
