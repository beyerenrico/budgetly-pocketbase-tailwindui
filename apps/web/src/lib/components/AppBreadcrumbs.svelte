<script lang="ts">
	import { MenuItem } from '@rgossiaux/svelte-headlessui';
	import {
		ArrowLeftOnRectangle,
		ChevronDown,
		ChevronRight,
		EllipsisVertical,
		Home,
		LockClosed,
		UserCircle
	} from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { AppLayoutOffCanvasOpener, AppMenuDropdown } from '.';

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

<nav
	class="sticky top-0 z-30 flex justify-between bg-white border-b border-gray-200 md:py-2"
	aria-label="Breadcrumb"
>
	<AppLayoutOffCanvasOpener />
	<!-- svelte-ignore a11y-no-redundant-roles -->
	<ol role="list" class="flex flex-grow w-full px-4 sm:space-x-4 md:px-8">
		<li class="flex">
			<div class="flex items-center">
				<a href="/app" class="text-gray-500 hover:text-gray-700">
					<Icon src={Home} theme="mini" class="flex-shrink-0 w-5 h-5" />
					<span class="sr-only">Home</span>
				</a>
			</div>
		</li>

		{#each breadcrumbElements as element}
			<li class="flex">
				<div class="flex items-center">
					<Icon src={ChevronRight} theme="mini" class="flex-shrink-0 w-5 h-5 text-gray-400" />
					<a
						href={element.href}
						class="w-16 ml-2 text-sm font-medium text-gray-500 truncate sm:ml-4 hover:text-gray-700 max-w-max sm:w-full"
						>{element.title}</a
					>
				</div>
			</li>
		{/each}
	</ol>
	<div class="flex flex-shrink-0 px-4 sm:px-6 lg:px-8">
		<AppMenuDropdown label="Account">
			<svelte:fragment slot="buttonContent">
				<div class="hidden sm:inline-flex">
					Account
					<Icon
						src={ChevronDown}
						theme="mini"
						class="w-5 h-5 ml-2 -mr-1 text-gray-400"
						aria-hidden="true"
					/>
				</div>
				<div class="inline-flex sm:hidden">
					<Icon
						src={EllipsisVertical}
						theme="mini"
						class="w-5 h-5 text-gray-400"
						aria-hidden="true"
					/>
				</div>
			</svelte:fragment>
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
							type="submit"
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
