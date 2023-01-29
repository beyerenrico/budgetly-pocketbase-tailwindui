<script lang="ts">
	import { AppBreadcrumbs, AppMenuDropdown, ContentWrapperEditable } from '$lib/components';
	import AppPopover from '$lib/components/AppPopover.svelte';
	import { MenuItem } from '@rgossiaux/svelte-headlessui';
	import { EllipsisVertical, Scale, Trash, Wallet } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { PageData } from './$types';

	export let data: PageData;

	const breadcrumbElements = [
		{
			title: 'Planners',
			href: '/app/planners'
		},
		{
			title: data?.planner?.title,
			href: `/app/planners/${data?.planner?.id}`
		}
	];

	$: ({ planner } = data);
</script>

<AppBreadcrumbs {breadcrumbElements} />

<ContentWrapperEditable
	headline={planner?.title}
	description={planner?.description}
	withAction={true}
	actionLabel="Add"
>
	<div class="px-4 sm:px-6 lg:px-8">
		<div class="mt-8 flex flex-col">
			<div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="inline-block min-w-full py-2 align-middle">
					<table class="min-w-full divide-y divide-gray-300">
						<thead>
							<tr>
								<th
									scope="col"
									class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
									>Name</th
								>
								<th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
									>Title</th
								>
								<th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
									>Email</th
								>
								<th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
									>Role</th
								>
								<th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0">
									<span class="sr-only">Edit</span>
								</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-200">
							<tr>
								<td
									class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0"
									>Lindsay Walton</td
								>
								<td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500"
									>Front-end Developer</td
								>
								<td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500"
									>lindsay.walton@example.com</td
								>
								<td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">Member</td>
								<td
									class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0"
								>
									<a href="#" class="text-indigo-600 hover:text-indigo-900"
										>Edit<span class="sr-only">, Lindsay Walton</span></a
									>
								</td>
							</tr>

							<!-- More people... -->
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
	<svelte:fragment slot="action">
		<div class="flex gap-2">
			<AppMenuDropdown
				label="Add"
				buttonStyles="inline-flex justify-center w-full px-4 py-2 items-center rounded-md border border-transparent bg-indigo-600 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
			>
				<div class="px-1 py-1">
					<MenuItem let:active>
						<form action="/auth/logout" method="POST">
							<button
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
						</form>
					</MenuItem>
					<MenuItem let:active>
						<form action="/auth/logout" method="POST">
							<button
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
						</form>
					</MenuItem>
				</div>
			</AppMenuDropdown>
			<AppMenuDropdown
				buttonStyles="inline-flex justify-center w-full px-2 py-2 items-center rounded-md border border-transparent bg-gray-400 text-sm font-medium text-white shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
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
		</div>
	</svelte:fragment>
</ContentWrapperEditable>
