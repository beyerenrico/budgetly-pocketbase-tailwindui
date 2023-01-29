<script lang="ts">
	import { AppBreadcrumbs, AppEmpty, ContentWrapper } from '$lib/components';
	import { ChevronRight, ListBullet } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { PageData } from './$types';

	export let data: PageData;

	const breadcrumbElements = [
		{
			title: 'Planners',
			href: '/app/planners'
		}
	];

	$: ({ planners } = data);
</script>

<AppBreadcrumbs {breadcrumbElements} />

<ContentWrapper
	headline="Planners"
	description="All your planners in one place. Just click on one and get started"
	withAction={true}
	action="?/createPlanner"
	actionLabel="Add new planner"
>
	{#if !planners?.length}
		<AppEmpty
			text="You haven't created a planner yet. Get started by creating a new one."
			label="Create a new planner"
			action="?/createPlanner"
			icon={ListBullet}
		/>
	{:else}
		<div class="overflow-hidden bg-white shadow sm:rounded-md">
			<!-- svelte-ignore a11y-no-redundant-roles -->
			<ul role="list" class="divide-y divide-gray-200">
				{#each planners as element}
					<li>
						<a href="/app/planners/{element.id}" class="block hover:bg-gray-50">
							<div class="flex items-center px-4 py-4 sm:px-6">
								<div class="flex min-w-0 flex-1 items-center">
									<div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
										<div>
											<p class="text-sm font-medium text-gray-600">{element.title}</p>
											<p class="truncate text-sm font-normal text-gray-400">
												{element.description}
											</p>
										</div>
									</div>
								</div>
								<div>
									<Icon src={ChevronRight} theme="mini" class="h-5 w-5 text-gray-400" />
								</div>
							</div>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</ContentWrapper>
