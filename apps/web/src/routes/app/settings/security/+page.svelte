<script lang="ts">
	import { AppBreadcrumbs, ContentWrapper, FormInputHorizontal } from '$lib/components';
	import { getImageURL } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;

	const breadcrumbElements = [
		{
			title: 'Settings',
			href: '/app/settings'
		},
		{
			title: 'Security',
			href: '/app/settings/security'
		}
	];

	$: ({ user } = data);
</script>

<AppBreadcrumbs {breadcrumbElements} />

<ContentWrapper>
	<form method="POST" enctype="multipart/form-data" class="space-y-8 divide-y divide-gray-200">
		<div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
			<div class="space-y-6 sm:space-y-5">
				<div>
					<h3 class="text-lg font-medium leading-6 text-gray-900">Security</h3>
					<p class="max-w-2xl mt-1 text-sm text-gray-500">
						This information will be displayed publicly so be careful what you share.
					</p>
				</div>
				<div class="space-y-6 sm:space-y-5">
					<FormInputHorizontal
						label="Old Password"
						id="oldPassword"
						type="password"
						required={true}
					/>
					<FormInputHorizontal label="New Password" id="password" type="password" required={true} />
					<FormInputHorizontal
						label="Confirm New Password"
						id="passwordConfirm"
						type="password"
						required={true}
					/>
				</div>
			</div>
		</div>

		<div class="pt-5">
			<div class="flex items-center justify-between">
				<a href="/auth/reset-password" class="text-sm text-indigo-600 hover:underline"
					>I forgot my password</a
				>
				<button
					type="submit"
					class="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>Save</button
				>
			</div>
		</div>
	</form>
</ContentWrapper>
