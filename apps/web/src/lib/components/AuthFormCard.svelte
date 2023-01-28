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
	export let authProviders: AuthProviderInfo[];

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
			class="mx-auto h-12 w-auto"
			src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
			alt="Your Company"
		/>
		<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
			{heading}
		</h2>
		{#if subheading}
			<p class="mt-2 text-center text-sm text-gray-600">
				Or
				<a href={redirect} class="font-medium text-indigo-600 hover:text-indigo-500">{subheading}</a
				>
			</p>
		{/if}
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
								<a
									on:click={() => setProviderCookie(element)}
									href={element.authUrl + PUBLIC_OAUTH_CALLBACK_URL}
									class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
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
