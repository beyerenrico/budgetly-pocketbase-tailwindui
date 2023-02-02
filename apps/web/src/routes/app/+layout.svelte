<script lang="ts">
	import type { LayoutData } from './$types';
	import { navigationElements } from '$lib/constants';
	import { AppLayoutOffCanvasMenu, AppLayoutSidebar } from '$lib/components';
	import { currentPlanner } from '$lib/stores';
	import { ArchiveBox, Calendar, Scale, Wallet } from '@steeze-ui/heroicons';
	import type { IconSource } from '@steeze-ui/svelte-icon/types';

	export let data: LayoutData;

	let plannerId: string | undefined;

	currentPlanner.subscribe((value) => {
		plannerId = value;
	});

	let plannerElements: {
		title: string;
		href: string;
		icon: IconSource;
	}[] = [];

	$: ({ user } = data);

	$: plannerElements = [
		{
			title: 'Overview',
			href: `/app/planners/${plannerId}`,
			icon: Calendar
		},
		{
			title: 'Categories',
			href: `/app/planners/${plannerId}/categories`,
			icon: ArchiveBox
		},
		{
			title: 'Expenses',
			href: `/app/planners/${plannerId}/expenses`,
			icon: Scale
		},
		{
			title: 'Income',
			href: `/app/planners/${plannerId}/income`,
			icon: Wallet
		}
	];
</script>

<div>
	<AppLayoutOffCanvasMenu {user} {navigationElements} />
	{#if plannerId}
		<AppLayoutSidebar {user} navigationElements={plannerElements} />
	{:else}
		<AppLayoutSidebar {user} {navigationElements} />
	{/if}

	<div class="flex flex-col flex-1 md:pl-16 xl:pl-64">
		<main class="flex-1">
			<slot />
		</main>
	</div>
</div>
