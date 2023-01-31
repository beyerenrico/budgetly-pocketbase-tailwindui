<script lang="ts">
	import { FolderPlus } from '@steeze-ui/heroicons';
	import type { IconSource } from '@steeze-ui/heroicons/types';
	import { Icon } from '@steeze-ui/svelte-icon';

	export let text: string = '';
	export let action: string = '';
	export let label: string = '';
	export let icon: IconSource = FolderPlus;
</script>

<p class="pb-4 mt-1 text-sm text-gray-500">{text}</p>
<form {action} method="POST">
	<button
		type="submit"
		class="relative block w-full p-12 text-center border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
	>
		<Icon src={icon} class="w-12 h-12 mx-auto text-gray-400" />
		<span class="block mt-2 text-sm font-medium text-gray-900">{label}</span>
	</button>
</form>
