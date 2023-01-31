<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';

	export let data: PageData;

	const statusMessages = {
		400: 'There seems to be an issue with the provided data.',
		404: 'Please check the URL in the address bar and try again.',
		500: 'There seems to be a problem on our side. Please try again later.'
	};
</script>

<div class="min-h-full px-6 py-16 bg-white sm:py-24 md:grid md:place-items-center lg:px-8">
	<div class="max-w-3xl mx-auto">
		<main class="sm:flex">
			<p class="text-4xl font-bold tracking-tight text-indigo-600 sm:text-5xl">
				{$page.status}
			</p>
			<div class="sm:ml-6">
				<div class="sm:border-l sm:border-gray-200 sm:pl-6">
					<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
						{$page?.error?.message}
					</h1>
					<p class="mt-1 text-base text-gray-500">
						{statusMessages[$page.status]}
					</p>
				</div>
				<div class="flex mt-10 space-x-3 sm:border-l sm:border-transparent sm:pl-6">
					<a
						href={data?.user ? '/app' : '/'}
						class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>Go back home</a
					>
				</div>
			</div>
		</main>
	</div>
</div>
