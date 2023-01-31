<script lang="ts">
	import { AppMenuDropdown } from '$lib/components';
	import { MenuItem } from '@rgossiaux/svelte-headlessui';
	import { ArrowLeftOnRectangle, LockClosed, UserCircle } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

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

	$: ({ user } = data);
</script>

<nav class="bg-white shadow">
	<div class="px-4 mx-auto sm:px-6 lg:px-8">
		<div class="flex justify-between h-16">
			<div class="flex">
				<div class="flex items-center flex-shrink-0">
					<img
						class="block w-auto h-8 lg:hidden"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt="Your Company"
					/>
					<img
						class="hidden w-auto h-8 lg:block"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt="Your Company"
					/>
				</div>
			</div>
			<div class="hidden sm:ml-6 sm:flex sm:items-center">
				<!-- Profile dropdown -->
				<div class="relative ml-3">
					{#if user}
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
					{:else}
						<div class="hidden sm:ml-6 sm:flex sm:space-x-2">
							<a
								href="/auth/login"
								class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
								>Login</a
							>
							<a
								href="/auth/register"
								class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
								>Register</a
							>
						</div>
					{/if}
				</div>
			</div>
			<div class="flex items-center -mr-2 sm:hidden">
				<!-- Mobile menu button -->
				<button
					type="button"
					class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					aria-controls="mobile-menu"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<!--
            Icon when menu is closed.

            Heroicon name: outline/bars-3

            Menu open: "hidden", Menu closed: "block"
          -->
					<svg
						class="block w-6 h-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<!--
            Icon when menu is open.

            Heroicon name: outline/x-mark

            Menu open: "block", Menu closed: "hidden"
          -->
					<svg
						class="hidden w-6 h-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="sm:hidden" id="mobile-menu">
		<div class="pt-2 pb-3 space-y-1">
			<!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
			<a
				href="#"
				class="block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 border-l-4 border-indigo-500 bg-indigo-50"
				>Dashboard</a
			>
			<a
				href="#"
				class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
				>Team</a
			>
			<a
				href="#"
				class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
				>Projects</a
			>
			<a
				href="#"
				class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
				>Calendar</a
			>
		</div>
		<div class="pt-4 pb-3 border-t border-gray-200">
			<div class="flex items-center px-4">
				<div class="flex-shrink-0">
					<img
						class="w-10 h-10 rounded-full"
						src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
					/>
				</div>
				<div class="ml-3">
					<div class="text-base font-medium text-gray-800">Tom Cook</div>
					<div class="text-sm font-medium text-gray-500">tom@example.com</div>
				</div>
				<button
					type="button"
					class="flex-shrink-0 p-1 ml-auto text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				>
					<span class="sr-only">View notifications</span>
					<!-- Heroicon name: outline/bell -->
					<svg
						class="w-6 h-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
						/>
					</svg>
				</button>
			</div>
			<div class="mt-3 space-y-1">
				<a
					href="#"
					class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
					>Your Profile</a
				>
				<a
					href="#"
					class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
					>Settings</a
				>
				<a
					href="#"
					class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
					>Sign out</a
				>
			</div>
		</div>
	</div>
</nav>

<slot />
