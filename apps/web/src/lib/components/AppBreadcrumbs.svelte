<script>
	import { ChevronRight, Home } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';

	/**
	 * @type {any[]}
	 */
	export let breadcrumbElements = [];
</script>

<nav class="flex border-b border-gray-200 bg-white py-2" aria-label="Breadcrumb">
	<!-- svelte-ignore a11y-no-redundant-roles -->
	<ol role="list" class="flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8">
		<li class="flex">
			<div class="flex items-center">
				<a href="/app" class="text-gray-500 hover:text-gray-700">
					<Icon src={Home} theme="mini" class="h-5 w-5 flex-shrink-0" />
					<span class="sr-only">Home</span>
				</a>
			</div>
		</li>

		{#each breadcrumbElements as element}
			<li class="flex">
				<div class="flex items-center">
					<Icon src={ChevronRight} theme="mini" class="h-5 w-5 flex-shrink-0 text-gray-400" />
					<a href={element.href} class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
						>{element.title}</a
					>
				</div>
			</li>
		{/each}
	</ol>
</nav>
