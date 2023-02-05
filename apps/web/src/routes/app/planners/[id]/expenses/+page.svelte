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
		plannerSlideOverEditMode,
		plannerSlideOverOpen,
		plannerSlideOverRecord,
		plannerSlideOverType
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
			title: 'Expenses',
			href: `/app/planners/${data?.planner?.id}/expenses`
		}
	];

	$: ({ allExpenses } = data);
</script>

<AppBreadcrumbs {breadcrumbElements} />

<ContentWrapper
	headline="Expenses"
	description="All expenses in one place."
	withAction={true}
	actionLabel="Add"
>
	<svelte:fragment slot="action">
		<button
			on:click={() => {
				plannerSlideOverOpen.set(true);
				plannerSlideOverEditMode.set(false);
			}}
			type="button"
			class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
			>Add</button
		>
	</svelte:fragment>
	<AppTable>
		<svelte:fragment slot="headers">
			<tr>
				<AppTableHeaderLeading>Name</AppTableHeaderLeading>
				<AppTableHeader>Purpose</AppTableHeader>
				<AppTableHeader>Booking Date</AppTableHeader>
				<AppTableHeader>Category</AppTableHeader>
				<AppTableHeader>Amount</AppTableHeader>
				<AppTableHeaderAction>Edit</AppTableHeaderAction>
			</tr>
		</svelte:fragment>
		<svelte:fragment slot="rows">
			{#each allExpenses as transaction}
				<tr>
					<AppTableRowLeading>{transaction.name}</AppTableRowLeading>
					<AppTableRow>{transaction.purpose}</AppTableRow>
					<AppTableRow>{dayjs(transaction.date).format('DD.MM.YYYY HH:mm')}</AppTableRow>
					<AppTableRow>{transaction.expand.category.title}</AppTableRow>
					<AppTableRow
						>{new Intl.NumberFormat('de', { style: 'currency', currency: 'EUR' }).format(
							-transaction.amount
						)}</AppTableRow
					>
					<AppTableRowAction
						on:click={() => {
							plannerSlideOverOpen.set(true);
							plannerSlideOverEditMode.set(true);
							plannerSlideOverType.set('expense');
							plannerSlideOverRecord.set(transaction);
						}}
						identifier={transaction.id}>Edit</AppTableRowAction
					>
				</tr>
			{/each}
		</svelte:fragment>
	</AppTable>
</ContentWrapper>
