<script lang="ts">
	import { page } from '$app/stores';
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { Admin, Record } from 'pocketbase';
	import { AppAccountButton } from '.';

	export let user: Record | Admin | null;

	export let navigationElements: any;
</script>

<!-- Static sidebar for desktop -->
<div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
	<!-- Sidebar component, swap this element with another sidebar if you like -->
	<div class="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
		<div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
			<div class="flex flex-shrink-0 items-center px-4">
				<img
					class="h-8 w-auto"
					src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
					alt="Your Company"
				/>
			</div>
			<nav class="mt-5 flex-1 space-y-1 bg-white px-2">
				<!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
				{#each navigationElements as element}
					<a
						href={element.href}
						class="{$page.url.pathname === element.href
							? 'bg-gray-100 text-gray-900'
							: 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'} group flex items-center px-2 py-2 text-base font-medium rounded-md"
					>
						<Icon
							src={element.icon}
							theme="outline"
							class="{$page.url.pathname === element.href
								? 'text-gray-500'
								: 'text-gray-400 group-hover:text-gray-500'}  mr-4 flex-shrink-0 h-6 w-6"
						/>
						{element.title}
					</a>
				{/each}
			</nav>
		</div>
		<AppAccountButton {user} />
	</div>
</div>
