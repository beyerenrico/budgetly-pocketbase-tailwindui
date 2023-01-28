<script>
	import { AuthFormCard, FormInput } from '$lib/components';
</script>

<AuthFormCard
	heading="Register a new account"
	subheading="sign in with your existing one"
	submitLabel="Register"
	redirect="/auth/login"
>
	<FormInput label="Name" id="name" type="text" placeholder="Jon Doe" required={true} />
	<FormInput
		label="Email address"
		id="email"
		type="email"
		placeholder="jon.doe@mail.com"
		required={true}
	/>
	<FormInput
		label="Password"
		id="password"
		type="password"
		placeholder="Must have at least 8 characters"
		required={true}
	/>
	<FormInput
		label="Confirm Password"
		id="confirmPassword"
		type="password"
		placeholder="Must have at least 8 characters"
		required={true}
	/>
</AuthFormCard>
