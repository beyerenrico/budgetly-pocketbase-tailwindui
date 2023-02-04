<script lang="ts">
	import {
		AppBreadcrumbs,
		AppTable,
		AppTableHeaderAction,
		AppTableHeaderLeading,
		AppTableRowAction,
		AppTableRowLeading,
		ContentWrapper
	} from '$lib/components';
	import { categorySlideOverOpen } from '$lib/stores';
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
	<AppTable>
		<svelte:fragment slot="headers">
			<tr>
				<AppTableHeaderLeading>Title</AppTableHeaderLeading>
				<AppTableHeaderAction>Edit</AppTableHeaderAction>
			</tr>
		</svelte:fragment>
		<svelte:fragment slot="rows">
			{#each categories as element}
				<tr>
					<AppTableRowLeading>{element.title}</AppTableRowLeading>
					<AppTableRowAction
						on:click={() => {
							categorySlideOverOpen.set(true);
						}}
						identifier={element.id}>Edit</AppTableRowAction
					>
				</tr>
			{/each}
		</svelte:fragment>
	</AppTable>
</ContentWrapper>
