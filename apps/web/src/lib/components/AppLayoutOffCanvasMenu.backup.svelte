<script lang="ts">
	import { page } from '$app/stores';
	import { Transition } from '@rgossiaux/svelte-headlessui';
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { Admin, Record } from 'pocketbase';
	import { AppAccountButton, AppLayoutOffCanvasCloser } from '.';
	import { offCanvasMenuOpen } from '$lib/stores';

	export let user: Record | Admin | null;
	export let navigationElements: any[];
	let open: boolean;

	offCanvasMenuOpen.subscribe((value) => {
		open = value;
	});

	$: console.log(open);
</script>

<div>
	<div class="relative z-40 md:hidden" role="dialog" aria-modal="true">
		<!-- Off-canvas menu backdrop, show/hide based on off-canvas menu state. -->
		<Transition
			show={open}
			enter="transition-opacity ease-linear duration-300"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="transition-opacity ease-linear duration-300"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
			class="fixed inset-0 bg-gray-600 bg-opacity-75"
		/>

		<div class="fixed inset-0 z-40 flex">
			<!-- Off-canvas menu, show/hide based on off-canvas menu state. -->
			<Transition
				show={open}
				enter="transition ease-in-out duration-300 transform"
				enterFrom="-translate-x-full"
				enterTo="translate-x-0"
				leave="transition ease-in-out duration-300 transform"
				leaveFrom="translate-x-0"
				leaveTo="-translate-x-full"
				class="relative flex w-full max-w-xs flex-1 flex-col bg-white"
			>
				<Transition
					show={open}
					enter="ease-in-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in-out duration-300"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<AppLayoutOffCanvasCloser />
				</Transition>

				<div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
					<div class="flex flex-shrink-0 items-center px-4">
						<img
							class="h-8 w-auto"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
							alt="Your Company"
						/>
					</div>
					<nav class="mt-5 space-y-1 px-2">
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
			</Transition>
		</div>

		<div class="w-14 flex-shrink-0">
			<!-- Force sidebar to shrink to fit close icon -->
		</div>
	</div>
</div>
