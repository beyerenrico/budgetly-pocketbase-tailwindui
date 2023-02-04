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
			title: 'Summary',
			href: `/app/planners/${data?.planner?.id}/summary`
		}
	];

	$: ({ allExpenses, allIncomes } = data);
</script>

<AppBreadcrumbs {breadcrumbElements} />

<ContentWrapper
	headline="Summary"
	description="This is the summary page for your planner."
	withAction={true}
	actionLabel="Export"
>
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
			{#each allIncomes as transaction}
				<tr class="bg-green-100">
					<AppTableRowLeading>{transaction.name}</AppTableRowLeading>
					<AppTableRow>{transaction.purpose}</AppTableRow>
					<AppTableRow>{dayjs(transaction.date).format('DD.MM.YYYY HH:mm')}</AppTableRow>
					<AppTableRow>{transaction.category}</AppTableRow>
					<AppTableRow bold={true}
						>+{new Intl.NumberFormat('de', { style: 'currency', currency: 'EUR' }).format(
							transaction.amount
						)}</AppTableRow
					>
					<AppTableRowAction link="#" identifier={transaction.id}>Edit</AppTableRowAction>
				</tr>
			{/each}
			{#each allExpenses as transaction}
				<tr>
					<AppTableRowLeading>{transaction.sender}</AppTableRowLeading>
					<AppTableRow>{transaction.purpose}</AppTableRow>
					<AppTableRow>{dayjs(transaction.date).format('DD.MM.YYYY HH:mm')}</AppTableRow>
					<AppTableRow>{transaction.category}</AppTableRow>
					<AppTableRow bold={true}
						>-{new Intl.NumberFormat('de', { style: 'currency', currency: 'EUR' }).format(
							transaction.amount
						)}</AppTableRow
					>
					<AppTableRowAction link="#" identifier={transaction.id}>Edit</AppTableRowAction>
				</tr>
			{/each}
			<tr class="bg-gray-100">
				<AppTableRowLeading bold={true}>Balance</AppTableRowLeading>
				<AppTableRow />
				<AppTableRow />
				<AppTableRow />
				<AppTableRow bold={true}>
					{new Intl.NumberFormat('de', { style: 'currency', currency: 'EUR' }).format(
						allIncomes.reduce((acc, curr) => acc + +curr.amount, 0) -
							allExpenses.reduce((acc, curr) => acc + +curr.amount, 0)
					)}
				</AppTableRow>
				<AppTableRow />
			</tr>
		</svelte:fragment>
	</AppTable>
</ContentWrapper>
