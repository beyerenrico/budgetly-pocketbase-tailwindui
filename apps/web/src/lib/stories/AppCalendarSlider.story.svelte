<script lang="ts">
	import '../../app.postcss';
	import type { Hst } from '@histoire/plugin-svelte';
	import AppCalendarSlider from '$lib/components/AppCalendarSlider.svelte';

	export let Hst: Hst;
</script>

<Hst.Story title="App / Calendar / Slider">
	<div class="max-w-xl px-4">
		<AppCalendarSlider />
	</div>
</Hst.Story>
