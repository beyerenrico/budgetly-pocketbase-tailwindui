<script>
	import { AuthFormCard, FormInput } from '$lib/components';
</script>

<AuthFormCard
	heading="Sign in to your account"
	subheading="create a new one"
	submitLabel="Sign in"
	redirect="/auth/register"
	showAuthProviders={true}
>
	<FormInput label="Email address" id="email" type="email" required={true} />
	<FormInput label="Password" id="password" type="password" required={true} />

	<div class="flex items-center justify-between">
		<div class="flex items-center">
			<input
				id="remember-me"
				name="remember-me"
				type="checkbox"
				class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
			/>
			<label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
		</div>

		<div class="text-sm">
			<a href="/auth/reset-password" class="font-medium text-indigo-600 hover:text-indigo-500"
				>Forgot your password?</a
			>
		</div>
	</div>
</AuthFormCard>
