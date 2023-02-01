<script lang="ts">
	import '../../app.postcss';
	import type { Hst } from '@histoire/plugin-svelte';
	import type { Record } from 'pocketbase';
	import AppAccountButton from '../components/AppAccountButton.svelte';

	export let Hst: Hst;

	const user = {
		name: 'Jon Doe'
	} as unknown as Record;
</script>

<Hst.Story title="App / Account Button">
	<div class="max-w-xl px-4">
		<AppAccountButton {user} />
	</div>
</Hst.Story>
