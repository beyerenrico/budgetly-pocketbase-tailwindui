<script lang="ts">
	import { AuthFormCard, FormInput } from '$lib/components';
	import type { PageData } from './$types';

	export let data: PageData;
	export let form: FormData;

	$: ({ authProviders } = data);
</script>

<AuthFormCard
	{form}
	heading="Sign in to your account"
	subheading="create a new one"
	submitLabel="Sign in"
	redirect="/auth/register"
	showAuthProviders={true}
	{authProviders}
>
	<FormInput label="Email address" id="email" type="email" required={true} />
	<FormInput label="Password" id="password" type="password" required={true} />

	<div class="flex items-center justify-between">
		<div class="flex items-center">
			<input
				id="remember-me"
				name="remember-me"
				type="checkbox"
				class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
			/>
			<label for="remember-me" class="block ml-2 text-sm text-gray-900">Remember me</label>
		</div>

		<div class="text-sm">
			<a href="/auth/reset-password" class="font-medium text-indigo-600 hover:text-indigo-500"
				>Forgot your password?</a
			>
		</div>
	</div>
</AuthFormCard>
