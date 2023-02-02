<script>
	import { FormInput } from '$lib/components';
	import { categorySlideOverOpen } from '$lib/stores';
</script>

<FormInput label="Title" type="text" id="title" placeholder="New category" />
<button
	on:click={() => categorySlideOverOpen.set(false)}
	type="submit"
	class="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
>
	Save
</button>
