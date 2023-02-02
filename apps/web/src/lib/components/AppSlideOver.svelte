<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { plannerSlideOverOpen } from '$lib/stores';
	import { Transition, TransitionChild } from '@rgossiaux/svelte-headlessui';
	import { XMark } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { Writable } from 'svelte/store';

	export let action: string = '';
	export let method: string = 'POST';
	export let enhancementFunction: SubmitFunction = () => {};
	export let headline: string;
	export let storeElement: Writable<boolean>;
	let open: boolean;

	storeElement.subscribe((value) => {
		open = value;
	});
</script>

<div class="relative z-40" role="dialog" aria-modal="true">
	<Transition show={open}>
		<Transition
			show={open}
			enter="transition-opacity ease-linear duration-300"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="transition-opacity ease-linear duration-300"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
			class="fixed inset-0 bg-gray-600 bg-opacity-75"
			on:click={() => storeElement.set(false)}
		/>

		<div class="fixed inset-0 overflow-hidden pointer-events-none">
			<div class="absolute inset-0 overflow-hidden">
				<div class="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none sm:pl-16">
					<TransitionChild
						as="div"
						enter="transform transition ease-in-out duration-500 sm:duration-700"
						enterFrom="translate-x-full"
						enterTo="translate-x-0"
						leave="transform transition ease-in-out duration-500 sm:duration-700"
						leaveFrom="translate-x-0"
						leaveTo="translate-x-full"
						class="w-screen max-w-md pointer-events-auto"
					>
						<form
							class="flex flex-col h-full bg-white divide-y divide-gray-200 shadow-xl"
							{action}
							{method}
							use:enhance={enhancementFunction}
						>
							<div class="flex-1 h-0 overflow-y-auto">
								<div class="px-4 py-6 bg-indigo-700 sm:px-6">
									<div class="flex items-center justify-between">
										<h3 class="text-lg font-medium text-white">{headline}</h3>
										<div class="flex items-center ml-3 h-7">
											<button
												type="button"
												class="text-indigo-200 bg-indigo-700 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
												on:click={() => storeElement.set(false)}
											>
												<span class="sr-only">Close panel</span>
												<Icon src={XMark} class="w-6 h-6" aria-hidden="true" />
											</button>
										</div>
									</div>
									<div class="mt-1">
										<p class="text-sm text-indigo-300">
											Get started by filling in the information below to create your new project.
										</p>
									</div>
								</div>
								<div class="flex flex-col justify-between flex-1">
									<div class="px-4 divide-y divide-gray-200 sm:px-6">
										<div class="pt-6 pb-5 space-y-6">
											<slot />
										</div>
									</div>
								</div>
							</div>
							<div class="flex justify-end flex-shrink-0 px-4 py-4">
								<button
									type="button"
									class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									on:click={() => storeElement.set(false)}
								>
									Cancel
								</button>
								<button
									type="submit"
									class="inline-flex justify-center px-4 py-2 ml-4 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								>
									Save
								</button>
							</div>
						</form>
					</TransitionChild>
				</div>
			</div>
		</div>
	</Transition>
</div>
