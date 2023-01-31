<script lang="ts">
	import type { Admin, Record } from 'pocketbase';
	import { Transition, TransitionChild } from '@rgossiaux/svelte-headlessui';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { page } from '$app/stores';
	import { offCanvasMenuOpen } from '$lib/stores';
	import { AppAccountButton, AppLayoutOffCanvasCloser } from '.';

	export let user: Record | Admin | null;
	export let navigationElements: any[];
	let open: boolean;

	offCanvasMenuOpen.subscribe((value) => {
		open = value;
	});
</script>

<div class="relative z-40 md:hidden" role="dialog" aria-modal="true">
	<Transition
		show={open}
		enter="transition-opacity ease-linear duration-300"
		enterFrom="opacity-0"
		enterTo="opacity-100"
		leave="transition-opacity ease-linear duration-300"
		leaveFrom="opacity-100"
		leaveTo="opacity-0"
		class="fixed inset-0 bg-gray-600 bg-opacity-75"
		on:click={() => offCanvasMenuOpen.set(false)}
	/>
	<Transition
		show={open}
		enter="transition-opacity ease-linear duration-300"
		enterFrom="opacity-0"
		enterTo="opacity-100"
		leave="transition-opacity ease-linear duration-300"
		leaveFrom="opacity-100"
		leaveTo="opacity-0"
		class="fixed inset-0 z-40 flex pointer-events-none"
	>
		<TransitionChild
			enter="transition ease-in-out duration-300 transform"
			enterFrom="-translate-x-full"
			enterTo="translate-x-0"
			leave="transition ease-in-out duration-300 transform"
			leaveFrom="translate-x-0"
			leaveTo="-translate-x-full"
			class="relative flex flex-col flex-1 w-full max-w-xs bg-white pointer-events-auto"
		>
			<TransitionChild
				enter="ease-in-out duration-300"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="ease-in-out duration-300"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
				class="absolute top-0 right-0 pt-2 -mr-12"
			>
				<AppLayoutOffCanvasCloser />
			</TransitionChild>

			<div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
				<div class="flex items-center flex-shrink-0 px-4">
					<img
						class="w-auto h-8"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt="Your Company"
					/>
				</div>
				<nav class="px-2 mt-5 space-y-1">
					{#each navigationElements as element}
						<a
							on:click={() => offCanvasMenuOpen.set(false)}
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
		</TransitionChild>

		<div class="flex-shrink-0 w-14">
			<!-- Force sidebar to shrink to fit close icon -->
		</div>
	</Transition>
</div>
