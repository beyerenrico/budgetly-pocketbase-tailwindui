<script lang="ts">
	import { FolderPlus } from '@steeze-ui/heroicons';
	import type { IconSource } from '@steeze-ui/heroicons/types';
	import { Icon } from '@steeze-ui/svelte-icon';

	export let text: string = '';
	export let action: string = '';
	export let label: string = '';
	export let icon: IconSource = FolderPlus;
</script>

<p class="mt-1 text-sm text-gray-500 pb-4">{text}</p>
<form {action} method="POST">
	<button
		type="submit"
		class="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
	>
		<Icon src={icon} class="mx-auto h-12 w-12 text-gray-400" />
		<span class="mt-2 block text-sm font-medium text-gray-900">{label}</span>
	</button>
</form>
