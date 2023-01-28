<script>
	/**
	 * @type {string}
	 */
	export let heading;

	/**
	 * @type {string}
	 */
	export let subheading;

	/**
	 * @type {string}
	 */
	export let submitLabel;

	/**
	 * @type {string}
	 */
	export let redirect;

	/**
	 * @type {boolean}
	 */
	export let showAuthProviders = false;

	/**
	 * @type {Record<string, unknown>[]}
	 */
	export let authProviders = [
		{
			label: 'Sign in with Facebook',
			provider: 'facebook'
		},
		{
			label: 'Sign in with GitHub',
			provider: 'github'
		},
		{
			label: 'Sign in with Google',
			provider: 'google'
		}
	];
</script>

<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<img
			class="mx-auto h-12 w-auto"
			src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
			alt="Your Company"
		/>
		<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
			{heading}
		</h2>
		<p class="mt-2 text-center text-sm text-gray-600">
			Or
			<a href={redirect} class="font-medium text-indigo-600 hover:text-indigo-500">{subheading}</a>
		</p>
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
			<form class="space-y-4" method="POST">
				<slot />

				<div>
					<button
						type="submit"
						class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>{submitLabel}</button
					>
				</div>
			</form>
			{#if showAuthProviders}
				<form class="mt-6" method="POST">
					<div class="relative">
						<div class="absolute inset-0 flex items-center">
							<div class="w-full border-t border-gray-300" />
						</div>
						<div class="relative flex justify-center text-sm">
							<span class="bg-white px-2 text-gray-500">Or continue with</span>
						</div>
					</div>

					<div class="mt-6 grid grid-cols-3 gap-3">
						{#each authProviders as element}
							<div>
								<button
									type="submit"
									formaction="?provider={element.provider}"
									class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
								>
									<span class="sr-only">{element.label}</span>
									<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
										<path
											fill-rule="evenodd"
											d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
											clip-rule="evenodd"
										/>
									</svg>
								</button>
							</div>
						{/each}
					</div>
				</form>
			{/if}
		</div>
	</div>
</div>
