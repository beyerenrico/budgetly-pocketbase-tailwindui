<script>
	import { AuthFormCard, FormInput } from '$lib/components';

	export let form;
</script>

<AuthFormCard {form} heading="Reset your password" submitLabel="Sign in">
	<FormInput
		label="Email address"
		id="email"
		type="email"
		placeholder="jon.doe@mail.com"
		required={true}
	/>
</AuthFormCard>
