<script lang="ts">
	import { page } from '$app/stores';
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { Admin, Record } from 'pocketbase';
	import { AppAccountButton } from '.';

	export let user: Record | Admin | null;
	export let navigationElements: any;
</script>

<div class="hidden w-16 md:fixed md:inset-y-0 md:flex md:flex-col xl:w-64">
	<div class="flex flex-col flex-1 min-h-0 bg-white border-r border-gray-200">
		<div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
			<div class="flex items-center flex-shrink-0 px-4">
				<img
					class="w-auto h-8"
					src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
					alt="Your Company"
				/>
			</div>
			<nav class="flex-1 px-2 mt-5 space-y-1 bg-white">
				{#each navigationElements as element}
					<a
						href={element.href}
						class="{$page.url.pathname === element.href
							? 'bg-gray-100 text-gray-900 hover:text-gray-900 hover:bg-gray-100'
							: ''} text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md justify-center xl:justify-start"
					>
						<Icon
							src={element.icon}
							theme="outline"
							class="{$page.url.pathname === element.href
								? 'text-gray-500'
								: 'text-gray-400 group-hover:text-gray-500'}  xl:mr-4 flex-shrink-0 h-6 w-6"
						/>
						<span class="hidden xl:block">{element.title}</span>
					</a>
				{/each}
			</nav>
		</div>
		<AppAccountButton {user} />
	</div>
</div>
