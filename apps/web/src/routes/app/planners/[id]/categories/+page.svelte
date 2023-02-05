<script lang="ts">
	import {
		AppBreadcrumbs,
		AppTable,
		AppTableHeader,
		AppTableHeaderAction,
		AppTableHeaderLeading,
		AppTableRow,
		AppTableRowAction,
		AppTableRowLeading,
		ContentWrapper
	} from '$lib/components';
	import {
		categorySlideOverOpen,
		categorySlideOverEditMode,
		categorySlideOverRecord
	} from '$lib/stores';
	import dayjs from 'dayjs';
	import type { PageData } from './$types';

	export let data: PageData;

	const breadcrumbElements = [
		{
			title: 'Planners',
			href: '/app/planners'
		},
		{
			title: data?.planner?.title,
			href: `/app/planners/${data?.planner?.id}`
		},
		{
			title: 'Categories',
			href: `/app/planners/${data?.planner?.id}/categories`
		}
	];

	$: ({ categories } = data);
</script>

<AppBreadcrumbs {breadcrumbElements} />

<ContentWrapper
	headline="Categories"
	description="All categories in one spot."
	withAction={true}
	actionLabel="Add"
>
	<svelte:fragment slot="action">
		<button
			on:click={() => {
				categorySlideOverOpen.set(true);
				categorySlideOverEditMode.set(false);
			}}
			type="button"
			class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
			>Add</button
		>
	</svelte:fragment>
	<AppTable>
		<svelte:fragment slot="headers">
			<tr>
				<AppTableHeaderLeading>Title</AppTableHeaderLeading>
				<AppTableHeader>Created</AppTableHeader>
				<AppTableHeader>Updated</AppTableHeader>
				<AppTableHeaderAction>Edit</AppTableHeaderAction>
			</tr>
		</svelte:fragment>
		<svelte:fragment slot="rows">
			{#each categories as element}
				<tr>
					<AppTableRowLeading>{element.title}</AppTableRowLeading>
					<AppTableRow>{dayjs(element.created).format('DD.MM.YYYY HH:mm')}</AppTableRow>
					<AppTableRow>{dayjs(element.updated).format('DD.MM.YYYY HH:mm')}</AppTableRow>
					<AppTableRowAction
						on:click={() => {
							categorySlideOverOpen.set(true);
							categorySlideOverEditMode.set(true);
							categorySlideOverRecord.set(element);
						}}
						identifier={element.id}>Edit</AppTableRowAction
					>
				</tr>
			{/each}
		</svelte:fragment>
	</AppTable>
</ContentWrapper>
