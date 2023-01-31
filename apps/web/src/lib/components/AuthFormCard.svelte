<script lang="ts">
	import { browser } from '$app/environment';
	import { PUBLIC_OAUTH_CALLBACK_URL } from '$env/static/public';
	import type { AuthProviderInfo } from 'pocketbase';
	import { Alert } from '.';

	export let form: {
		type: string;
		message: string;
	};

	export let heading: string;
	export let subheading: string = '';
	export let submitLabel: string;
	export let redirect: string = '';
	export let showAuthProviders: boolean = false;
	export let authProviders: AuthProviderInfo[] = [];

	const setProviderCookie = (provider: AuthProviderInfo) => {
		if (browser) {
			document.cookie = `state=${provider.state}`;
			document.cookie = `provider=${JSON.stringify(provider)}`;
		}
	};
</script>

<div class="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<img
			class="w-auto h-12 mx-auto"
			src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
			alt="Your Company"
		/>
		<h2 class="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900">
			{heading}
		</h2>
		{#if subheading}
			<p class="mt-2 text-sm text-center text-gray-600">
				Or
				<a href={redirect} class="font-medium text-indigo-600 hover:text-indigo-500">{subheading}</a
				>
			</p>
		{/if}
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
			<form class="space-y-4" method="POST">
				<slot />

				<div>
					<button
						type="submit"
						class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
							<span class="px-2 text-gray-500 bg-white">Or continue with</span>
						</div>
					</div>

					<div class="grid grid-cols-3 gap-3 mt-6">
						{#each authProviders as element}
							<div>
								<a
									on:click={() => setProviderCookie(element)}
									href={element.authUrl + PUBLIC_OAUTH_CALLBACK_URL}
									class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
								>
									<span class="sr-only">{element.name}</span>
									{element.name}
								</a>
							</div>
						{/each}
					</div>
				</form>
			{/if}
		</div>
		{#if form?.type && form?.message}
			<Alert type={form?.type}>{form?.message}</Alert>
		{/if}
	</div>
</div>
