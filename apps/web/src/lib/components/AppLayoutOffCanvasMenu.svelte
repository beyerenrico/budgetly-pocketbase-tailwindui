<script>
	import { page } from '$app/stores';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { AppProfileButton } from '.';

	/**
	 * @type {any[]}
	 */
	export let navigationElements;
</script>

<!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
<div class="relative z-40 md:hidden" role="dialog" aria-modal="true">
	<!--
      Off-canvas menu backdrop, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
	<div class="fixed inset-0 bg-gray-600 bg-opacity-75" />

	<div class="fixed inset-0 z-40 flex">
		<!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
		<div class="relative flex w-full max-w-xs flex-1 flex-col bg-white">
			<!--
          Close button, show/hide based on off-canvas menu state.

          Entering: "ease-in-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
			<div class="absolute top-0 right-0 -mr-12 pt-2">
				<button
					type="button"
					class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
				>
					<span class="sr-only">Close sidebar</span>
					<!-- Heroicon name: outline/x-mark -->
					<svg
						class="h-6 w-6 text-white"
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

			<div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
				<div class="flex flex-shrink-0 items-center px-4">
					<img
						class="h-8 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt="Your Company"
					/>
				</div>
				<nav class="mt-5 space-y-1 px-2">
					<!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
					{#each navigationElements as element}
						<a
							href={element.href}
							class="{$page.url.pathname === element.href
								? 'bg-gray-100 text-gray-900'
								: 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'} group flex items-center px-2 py-2 text-base font-medium rounded-md"
						>
							<!--
									Heroicon name: outline/home

									Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500"
								-->
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

			<AppProfileButton />
		</div>

		<div class="w-14 flex-shrink-0">
			<!-- Force sidebar to shrink to fit close icon -->
		</div>
	</div>
</div>
