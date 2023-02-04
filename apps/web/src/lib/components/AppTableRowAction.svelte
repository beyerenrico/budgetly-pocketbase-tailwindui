<script lang="ts">
	export let link: string;
	export let identifier: string;
</script>

<td class="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
	<a href={link} class="text-indigo-600 hover:text-indigo-900">
		<slot /><span class="sr-only">, {identifier}</span>
	</a>
</td>
