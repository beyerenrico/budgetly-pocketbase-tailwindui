<script lang="ts">
	import { offCanvasMenuOpen } from '$lib/stores';
</script>

<button
	on:click={() => offCanvasMenuOpen.set(false)}
	type="button"
	class="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
>
	<span class="sr-only">Close sidebar</span>
	<!-- Heroicon name: outline/x-mark -->
	<svg
		class="w-6 h-6 text-white"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		aria-hidden="true"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
	</svg>
</button>
