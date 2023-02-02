<script lang="ts">
	import { currentPlanner } from '$lib/stores';
	import { page } from '$app/stores';

	currentPlanner.set($page.params.id);
</script>

<slot />
