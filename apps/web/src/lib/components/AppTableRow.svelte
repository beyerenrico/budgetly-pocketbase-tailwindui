<script lang="ts">
	export let bold: boolean = false;
</script>

<td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500 {bold ? 'font-medium' : ''}">
	<slot />
</td>
