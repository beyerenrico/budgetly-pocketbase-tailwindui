<script lang="ts">
	import { AppBreadcrumbs, ContentWrapper, FormInputHorizontal } from '$lib/components';
	import { getImageURL } from '$lib/utils';
	import { CheckCircle, Plus, Trash } from '@steeze-ui/heroicons';
	import { BrandGoogle } from '@steeze-ui/tabler-icons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { fail } from '@sveltejs/kit';
	import type { PageData } from './$types';
	import AppDialog from '$lib/components/AppDialog.svelte';
	import type { AuthProviderInfo } from 'pocketbase';
	import { browser } from '$app/environment';
	import { PUBLIC_OAUTH_CALLBACK_URL } from '$env/static/public';

	export let data: PageData;

	const breadcrumbElements = [
		{
			title: 'Settings',
			href: '/app/settings'
		},
		{
			title: 'Account',
			href: '/app/settings/account'
		}
	];

	const showPreview = ({ target }: { target: any }): void => {
		const files = target?.files;

		if (files.length > 0) {
			const src = URL.createObjectURL(files[0]);
			const preview = document.getElementById('avatar-preview');

			if (!preview) {
				throw fail(400, {
					message: 'There seems to be an issue with the preview'
				});
			}

			preview.src = src;
		}
	};

	const setProviderCookie = (provider: AuthProviderInfo) => {
		if (browser) {
			document.cookie = `state=${provider.state}`;
			document.cookie = `provider=${JSON.stringify(provider)}`;
		}
	};

	$: ({ user, linkedExternalAuths, availableExternalAuths } = data);
</script>

<AppBreadcrumbs {breadcrumbElements} />

<ContentWrapper>
	<form
		method="POST"
		action="?/updateAccount"
		enctype="multipart/form-data"
		class="space-y-8 divide-y divide-gray-200"
	>
		<div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
			<div class="space-y-6 sm:space-y-5">
				<div>
					<h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
					<p class="max-w-2xl mt-1 text-sm text-gray-500">
						This information will be displayed publicly so be careful what you share.
					</p>
				</div>
				<div class="space-y-6 sm:space-y-5">
					<FormInputHorizontal
						label="Username"
						id="username"
						type="text"
						value={user?.username}
						autocomplete="username"
						required={true}
						prependSymbol={true}
						symbol="@"
					/>

					<div
						class="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"
					>
						<label for="photo" class="block text-sm font-medium text-gray-700">Avatar</label>
						<div class="mt-1 sm:col-span-2 sm:mt-0">
							<div class="flex items-center">
								<span class="w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
									<img
										id="avatar-preview"
										class="inline-block object-cover w-12 h-12 rounded-full"
										src={user?.avatar
											? getImageURL(user?.collectionId, user?.id, user?.avatar)
											: `https://ui-avatars.com/api/?name=${user?.name}`}
										alt={user?.name}
									/>
								</span>
								<label
									for="avatar"
									class="px-3 py-2 ml-5 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									>Change</label
								>
								<input
									type="file"
									id="avatar"
									name="avatar"
									class="hidden"
									accept="image/*"
									on:change={showPreview}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="pt-8 space-y-6 sm:space-y-5 sm:pt-10">
				<div>
					<h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
					<p class="max-w-2xl mt-1 text-sm text-gray-500">
						Use a permanent address where you can receive mail.
					</p>
				</div>
				<div class="space-y-6 sm:space-y-5">
					<FormInputHorizontal
						label="Name"
						id="name"
						type="text"
						value={user?.name}
						autocomplete="name"
						required={true}
					/>
					<FormInputHorizontal
						label="Email address"
						id="email"
						type="email"
						value={user?.email}
						autocomplete="email"
						required={true}
					/>
				</div>
			</div>

			<div class="pt-8 space-y-6 sm:space-y-5 sm:pt-10">
				<div>
					<h3 class="text-lg font-medium leading-6 text-gray-900">External auth providers</h3>
					<p class="max-w-2xl mt-1 text-sm text-gray-500">
						Use a permanent address where you can receive mail.
					</p>
				</div>
				{#if availableExternalAuths}
					<div class="md:grid md:grid-cols-3">
						<div class="overflow-hidden shadow sm:rounded-md md:col-span-2">
							<!-- svelte-ignore a11y-no-redundant-roles -->
							<ul role="list" class="divide-y divide-gray-200">
								{#each availableExternalAuths as element}
									<li
										class="block {linkedExternalAuths?.includes(element.name)
											? 'bg-white'
											: 'hover:bg-gray-50'}"
									>
										<AppDialog>
											<div class="flex items-center w-full py-4">
												<div class="flex items-center flex-1 min-w-0">
													<div class="flex flex-1 min-w-0 px-4">
														<p class="mr-4 text-sm font-medium text-left text-gray-600">
															{element.name.toUpperCase()}
														</p>
														{#if linkedExternalAuths?.includes(element.name)}
															<Icon src={CheckCircle} theme="mini" class="w-5 h-5 text-green-500" />
														{/if}
													</div>
												</div>
												<div class="flex items-center px-4">
													{#if linkedExternalAuths?.includes(element.name)}
														<Icon src={Trash} theme="mini" class="w-5 h-5 text-gray-400" />
													{:else}
														<Icon src={Plus} theme="mini" class="w-5 h-5 text-gray-400" />
													{/if}
												</div>
											</div>

											<div slot="headline">
												{#if linkedExternalAuths?.includes(element.name)}
													Unlink external provider
												{:else}
													Add external provider
												{/if}
											</div>

											<div slot="text" class="mt-2">
												<p class="text-sm text-gray-500">
													Your payment has been successfully submitted. We’ve sent you an email with
													all of the details of your order.
												</p>
											</div>

											<div slot="actions" class="mt-4">
												{#if linkedExternalAuths?.includes(element.name)}
													<form method="POST" action="?/unlinkExternalProvider">
														<button
															type="submit"
															class="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
														>
															Unlink
														</button>
														<input type="hidden" name="provider" value={element.name} />
													</form>
												{:else}
													<a
														on:click={() => setProviderCookie(element)}
														href={element.authUrl + PUBLIC_OAUTH_CALLBACK_URL}
														class="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
													>
														Connect
													</a>
												{/if}
											</div>
										</AppDialog>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				{/if}
			</div>
		</div>

		<div class="pt-8 space-y-6 sm:space-y-5 sm:pt-10">
			<div>
				<h3 class="text-lg font-medium leading-6 text-gray-900">Danger Zone</h3>
				<p class="max-w-2xl mt-1 text-sm text-gray-500">
					This action is permanent and cannot be reverted
				</p>
			</div>
			<button
				type="submit"
				formaction="?/deleteAccount"
				class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
				>Delete Account</button
			>
		</div>

		<div class="pt-5">
			<div class="flex justify-end">
				<button
					type="submit"
					class="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>Save</button
				>
			</div>
		</div>
	</form>
</ContentWrapper>
