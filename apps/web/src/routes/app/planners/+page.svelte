<script>
	import { AppBreadcrumbs, ContentWrapper } from '$lib/components';
	import AppEmpty from '$lib/components/AppEmpty.svelte';
	import { ListBullet } from '@steeze-ui/heroicons';

	const breadcrumbElements = [
		{
			title: 'Planners',
			href: '/app/planners'
		}
	];
</script>

<AppBreadcrumbs {breadcrumbElements} />

<ContentWrapper headline="Planners">
	<AppEmpty
		text="You haven't created a planner yet. Get started by selecting a template or start from an empty project."
		label="Create a new planner"
		href="/app/planners/new"
		icon={ListBullet}
	/>
</ContentWrapper>
