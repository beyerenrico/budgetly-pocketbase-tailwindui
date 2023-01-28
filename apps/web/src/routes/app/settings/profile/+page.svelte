<script>
	import { ListBullet } from '@steeze-ui/heroicons';
	import { AppBreadcrumbs, ContentWrapper } from '$lib/components';
	import AppEmpty from '$lib/components/AppEmpty.svelte';

	const breadcrumbElements = [
		{
			title: 'Settings',
			href: '/app/settings'
		},
		{
			title: 'Profile',
			href: '/app/settings/profile'
		}
	];
</script>

<AppBreadcrumbs {breadcrumbElements} />

<ContentWrapper>
	<h2 class="text-lg font-medium text-gray-900">Profile</h2>
</ContentWrapper>
