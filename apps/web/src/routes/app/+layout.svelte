<script>
	import { navigationElements } from '$lib/constants';
	import {
		AppLayoutOffCanvasCloser,
		AppLayoutOffCanvasMenu,
		AppLayoutSidebar
	} from '$lib/components';
</script>

<div>
	<AppLayoutOffCanvasMenu {navigationElements} />

	<AppLayoutSidebar {navigationElements} />

	<div class="flex flex-1 flex-col md:pl-64">
		<AppLayoutOffCanvasCloser />
		<main class="flex-1">
			<slot />
		</main>
	</div>
</div>
