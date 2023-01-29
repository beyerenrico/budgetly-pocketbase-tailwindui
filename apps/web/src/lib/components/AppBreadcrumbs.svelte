<script lang="ts">
	import { MenuItem } from '@rgossiaux/svelte-headlessui';
	import {
		ArrowLeftOnRectangle,
		ChevronRight,
		Home,
		LockClosed,
		UserCircle
	} from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { AppMenuDropdown } from '.';

	export let breadcrumbElements: any[] = [];

	const dropdownElements = [
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

<nav class="flex border-b border-gray-200 bg-white py-2 top-0 sticky z-10" aria-label="Breadcrumb">
	<!-- svelte-ignore a11y-no-redundant-roles -->
	<ol role="list" class="flex flex-grow w-full space-x-4 px-4 sm:px-6 lg:px-8">
		<li class="flex">
			<div class="flex items-center">
				<a href="/app" class="text-gray-500 hover:text-gray-700">
					<Icon src={Home} theme="mini" class="h-5 w-5 flex-shrink-0" />
					<span class="sr-only">Home</span>
				</a>
			</div>
		</li>

		{#each breadcrumbElements as element}
			<li class="flex">
				<div class="flex items-center">
					<Icon src={ChevronRight} theme="mini" class="h-5 w-5 flex-shrink-0 text-gray-400" />
					<a href={element.href} class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
						>{element.title}</a
					>
				</div>
			</li>
		{/each}
	</ol>
	<div class="flex px-4 sm:px-6 lg:px-8">
		<AppMenuDropdown label="Account">
			<div class="px-1 py-1 ">
				{#each dropdownElements as element}
					<MenuItem let:active>
						<a
							href={element.href}
							class="{active
								? 'text-gray-900 hover:bg-gray-50'
								: 'text-gray-600 hover:text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm"
						>
							<Icon
								src={element.icon}
								theme="mini"
								class="w-4 h-4 mr-2 {active ? 'text-gray-500' : 'text-gray-400'}"
							/>
							{element.title}
						</a>
					</MenuItem>
				{/each}
				<MenuItem let:active>
					<form action="/auth/logout" method="POST">
						<button
							class="{active
								? 'text-gray-900 hover:bg-gray-50'
								: 'text-gray-600 hover:text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm"
						>
							<Icon
								src={ArrowLeftOnRectangle}
								theme="mini"
								class="w-4 h-4 mr-2 {active ? 'text-gray-500' : 'text-gray-400'}"
							/>
							Sign out
						</button>
					</form>
				</MenuItem>
			</div>
		</AppMenuDropdown>
	</div>
</nav>
