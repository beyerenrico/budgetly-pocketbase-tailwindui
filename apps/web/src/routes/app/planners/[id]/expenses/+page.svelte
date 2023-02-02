<script lang="ts">
	import { AppBreadcrumbs } from '$lib/components';
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
		},
		{
			title: 'Expenses',
			href: `/app/planners/${data?.planner?.id}/expenses`
		}
	];
</script>

<AppBreadcrumbs {breadcrumbElements} />
