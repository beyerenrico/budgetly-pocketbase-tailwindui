<script lang="ts">
	import { AppBreadcrumbs, ContentWrapper } from '$lib/components';
	import { ChevronRight, LockClosed, UserCircle } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { PageData } from './$types';

	export let data: PageData;

	const breadcrumbElements = [
		{
			title: 'Settings',
			href: '/app/settings'
		}
	];

	const settingsElements = [
		{
			title: 'Account',
			href: '/app/settings/account',
			icon: UserCircle
		},
		{
			title: 'Security',
			href: '/app/settings/security',
			icon: LockClosed
		}
	];
</script>

<AppBreadcrumbs {breadcrumbElements} />

<ContentWrapper>
	<div class="overflow-hidden bg-white shadow sm:rounded-md mx-auto max-w-lg">
		<ul role="list" class="divide-y divide-gray-200">
			{#each settingsElements as element}
				<li>
					<a href={element.href} class="block hover:bg-gray-50">
						<div class="flex items-center px-4 py-4 sm:px-6">
							<div class="flex min-w-0 flex-1 items-center">
								<div class="flex-shrink-0">
									<Icon src={element.icon} theme="mini" class="h-8 w-8 text-gray-400" />
								</div>
								<div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
									<div>
										<p class="truncate text-sm font-medium text-gray-600">{element.title}</p>
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
</ContentWrapper>
