<script>
	import { AppBreadcrumbs, ContentWrapper } from '$lib/components';
	import { currentPlanner } from '$lib/stores';

	currentPlanner.set(undefined);
</script>

<AppBreadcrumbs />

<ContentWrapper
	headline="Dashboard"
	description="This is an quick overview of your planners, expenses, income and probably some charts and graphs"
/>
