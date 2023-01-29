<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ChevronDown, Scale, Wallet } from '@steeze-ui/heroicons';
	import { Popover, PopoverButton, PopoverPanel, Transition } from '@rgossiaux/svelte-headlessui';
	const solutions = [
		{
			name: 'Expense',
			description: 'Measure actions your users take',
			href: '##',
			icon: Wallet
		},
		{
			name: 'Income',
			description: 'Create your own targeted content',
			href: '##',
			icon: Scale
		}
	];
</script>

<div class="w-full max-w-sm px-4 top-16">
	<Popover class="relative" let:open>
		<PopoverButton
			class="{open
				? ''
				: 'text-opacity-90'} inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
		>
			<span>Solutions</span>
			<Icon
				src={ChevronDown}
				class="{open
					? ''
					: 'text-opacity-70'} ml-2 h-5 w-5 text-indigo-300 group-hover:text-opacity-80 transition ease-in-out duration-150"
				aria-hidden="true"
			/>
		</PopoverButton>
		<Transition
			enter="transition ease-out duration-200"
			enterFrom="opacity-0 translate-y-1"
			enterTo="opacity-100 translate-y-0"
			leave="transition ease-in duration-150"
			leaveFrom="opacity-100 translate-y-0"
			leaveTo="opacity-0 translate-y-1"
		>
			<PopoverPanel
				class="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-lg"
			>
				<div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
					<div class="relative grid gap-8 bg-white p-7">
						{#each solutions as item (item.name)}
							<a
								href={item.href}
								class="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-50"
							>
								<div
									class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12"
								>
									<Icon src={item.icon} aria-hidden="true" />
								</div>
								<div class="ml-4">
									<p class="text-sm font-medium text-gray-900">
										{item.name}
									</p>
									<p class="text-sm text-gray-500">
										{item.description}
									</p>
								</div>
							</a>
						{/each}
					</div>
					<div class="p-4 bg-gray-50">
						<a
							href="##"
							class="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-50"
						>
							<span class="flex items-center">
								<span class="text-sm font-medium text-gray-900"> Documentation </span>
							</span>
							<span class="block text-sm text-gray-500">
								Start integrating products and tools
							</span>
						</a>
					</div>
				</div>
			</PopoverPanel>
		</Transition>
	</Popover>
</div>
