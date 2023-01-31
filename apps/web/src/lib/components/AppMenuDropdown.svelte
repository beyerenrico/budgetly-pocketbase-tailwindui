<script lang="ts">
	import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@rgossiaux/svelte-headlessui';
	import { ChevronDown, EllipsisVertical } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';

	export let label: string = '';
	export let buttonStyles: string = '';
</script>

<div class="flex items-center w-auto text-right">
	<Menu as="div" class="relative inline-block text-left">
		<MenuButton
			class={buttonStyles === ''
				? 'inline-flex justify-center w-full px-2 sm:px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
				: buttonStyles}
		>
			<slot name="buttonContent">
				{label}
				<Icon
					src={ChevronDown}
					theme="mini"
					class="w-5 h-5 ml-2 -mr-1 text-gray-400"
					aria-hidden="true"
				/>
			</slot>
		</MenuButton>

		<Transition
			enter="transition ease-out duration-100"
			enterFrom="transform opacity-0 scale-95"
			enterTo="transform opacity-100 scale-100"
			leave="transition ease-in duration-75"
			leaveFrom="transform opacity-100 scale-100"
			leaveTo="transform opacity-0 scale-95"
		>
			<MenuItems
				class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
			>
				<slot />
			</MenuItems>
		</Transition>
	</Menu>
</div>
