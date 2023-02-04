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
	<AppTable>
		<svelte:fragment slot="headers">
			<tr>
				<AppTableHeaderLeading>Sender</AppTableHeaderLeading>
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
					<AppTableRowLeading>{transaction.sender}</AppTableRowLeading>
					<AppTableRow>{transaction.purpose}</AppTableRow>
					<AppTableRow>{dayjs(transaction.date).format('DD.MM.YYYY HH:mm')}</AppTableRow>
					<AppTableRow>{transaction.category}</AppTableRow>
					<AppTableRow
						>{new Intl.NumberFormat('de', { style: 'currency', currency: 'EUR' }).format(
							-transaction.amount
						)}</AppTableRow
					>
					<AppTableRowAction link="#" identifier={transaction.id}>Edit</AppTableRowAction>
				</tr>
			{/each}
		</svelte:fragment>
	</AppTable>
</ContentWrapper>
