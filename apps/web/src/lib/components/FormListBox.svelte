<script lang="ts">
	import {
		Listbox,
		ListboxButton,
		ListboxOption,
		ListboxOptions,
		Transition
	} from '@rgossiaux/svelte-headlessui';
	import { Check } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Selector } from '@steeze-ui/tabler-icons';
	import type { Record } from 'pocketbase';

	export let elements: Record[];

	let selected = elements[0];
</script>

<Listbox value={selected} on:change={(e) => (selected = e.detail)}>
	<div class="relative mt-1">
		<ListboxButton
			class="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-lg shadow-sm cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
		>
			<span class="block truncate">{selected?.title ?? selected ?? 'Select a category'}</span>
			<span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
				<Icon src={Selector} class="w-5 h-5 text-gray-400" aria-hidden="true" />
			</span>
		</ListboxButton>
		<Transition leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
			<ListboxOptions
				class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
			>
				{#each elements as element, elementIdx (elementIdx)}
					<ListboxOption
						class={({ active }) =>
							`cursor-default select-none relative py-2 pl-10 pr-4 ${
								active ? 'text-indigo-900 bg-indigo-100' : 'text-gray-900'
							}`}
						value={element.title}
						let:selected
					>
						<span class={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
							{element.title}
						</span>
						{#if selected}
							<span class="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
								<Icon src={Check} class="w-5 h-5" aria-hidden="true" />
							</span>
						{/if}
					</ListboxOption>
				{:else}
					<div class="px-4 py-2">No results</div>
				{/each}
				<slot />
			</ListboxOptions>
		</Transition>
	</div>
</Listbox>
