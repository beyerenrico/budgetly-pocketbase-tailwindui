<script lang="ts">
	import '../../app.postcss';
	import type { Hst } from '@histoire/plugin-svelte';
	import Alert from '../components/Alert.svelte';

	export let Hst: Hst;
</script>

<Hst.Story title="Alert">
	<div class="max-w-xl px-4">
		<Hst.Variant title="Success">
			<Alert type="success">
				Success!
				<svelte:fragment slot="description"
					>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aperiam perferendis atque
					quae quod, perspiciatis odit fuga dolore qui quisquam.</svelte:fragment
				>
			</Alert>
			<Alert type="success">Success!</Alert>
		</Hst.Variant>
		<Hst.Variant title="Warning">
			<Alert type="warning">
				Warning!
				<svelte:fragment slot="description"
					>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet delectus placeat culpa
					in voluptate necessitatibus iste vero exercitationem sed itaque?</svelte:fragment
				>
			</Alert>
			<Alert type="warning">Warning!</Alert>
		</Hst.Variant>
		<Hst.Variant title="Error">
			<Alert type="error">
				Error!
				<svelte:fragment slot="description"
					>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nemo at neque recusandae
					sit sapiente maiores facere odit dignissimos obcaecati!</svelte:fragment
				>
			</Alert>
			<Alert type="error">Error!</Alert>
		</Hst.Variant>
		<Hst.Variant title="Info">
			<Alert type="info">
				Info!
				<svelte:fragment slot="description"
					>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet enim ex suscipit ullam
					beatae, distinctio obcaecati illo nam tenetur adipisci.</svelte:fragment
				>
			</Alert>
			<Alert type="info">Info!</Alert>
		</Hst.Variant>
	</div>
</Hst.Story>
