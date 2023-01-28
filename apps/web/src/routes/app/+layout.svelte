<script lang="ts">
	import type { LayoutData } from './$types';
	import { navigationElements } from '$lib/constants';
	import {
		AppLayoutOffCanvasCloser,
		AppLayoutOffCanvasMenu,
		AppLayoutSidebar
	} from '$lib/components';

	export let data: LayoutData;

	$: ({ user } = data);
</script>

<div>
	<AppLayoutOffCanvasMenu {user} {navigationElements} />

	<AppLayoutSidebar {user} {navigationElements} />

	<div class="flex flex-1 flex-col md:pl-64">
		<AppLayoutOffCanvasCloser />
		<main class="flex-1">
			<slot />
		</main>
	</div>
</div>
