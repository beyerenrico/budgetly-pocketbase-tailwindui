<script lang="ts">
	import { offCanvasMenuOpen } from '$lib/stores';
</script>

<div class="sticky top-0 z-10 p-2 border-r md:hidden">
	<button
		on:click={() => offCanvasMenuOpen.set(true)}
		type="button"
		class="inline-flex items-center justify-center w-12 h-12 text-gray-500 rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
	>
		<span class="sr-only">Open sidebar</span>
		<!-- Heroicon name: outline/bars-3 -->
		<svg
			class="w-6 h-6"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			aria-hidden="true"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
			/>
		</svg>
	</button>
</div>
