<script lang="ts">
	import { FormInput } from '$lib/components';
	import { categorySlideOverEditMode, categorySlideOverRecord } from '$lib/stores';
	import type { Record } from 'pocketbase';

	let isEditing: boolean = false;
	let editRecord: Record | undefined = undefined;

	categorySlideOverEditMode.subscribe((value) => {
		isEditing = value;
	});

	categorySlideOverRecord.subscribe((value) => {
		editRecord = value;
	});
</script>

<FormInput
	label="Title"
	type="text"
	id="title"
	placeholder={isEditing && editRecord ? editRecord.title : 'New category'}
	value={isEditing && editRecord ? editRecord.title : ''}
/>
{#if isEditing && editRecord}
	<input type="hidden" name="id" value={editRecord.id} />
{/if}
