<script lang="ts">
	export let bold: boolean = false;
</script>

<td
	class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-900 sm:pl-6 {bold ? 'font-medium' : ''}"
>
	<slot />
</td>
