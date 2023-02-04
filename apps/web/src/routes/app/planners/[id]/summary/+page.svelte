<script lang="ts">
	import {
		AppBreadcrumbs,
		AppCalendarSlider,
		AppTable,
		AppTableHeader,
		AppTableHeaderAction,
		AppTableHeaderLeading,
		AppTableRow,
		AppTableRowAction,
		AppTableRowLeading,
		ButtonGroup,
		ContentWrapper
	} from '$lib/components';
	import {
		currentDate,
		plannerSlideOverOpen,
		plannerSlideOverType,
		recentlyCreatedCategory
	} from '$lib/stores';
	import dayjs from 'dayjs';
	import type { PageData } from './$types';

	export let data: PageData;

	let currentDay: Dayjs;
	currentDate.subscribe((value) => {
		currentDay = value;
	});

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
	<!-- <svelte:fragment slot="action">
		<ButtonGroup>
			<svelte:fragment slot="leftLabel">Overall</svelte:fragment>
			<svelte:fragment slot="centerLabel">Annual</svelte:fragment>
			<svelte:fragment slot="rightLabel">Monthly</svelte:fragment>
		</ButtonGroup>
	</svelte:fragment> -->
	<div class="grid-custom w-full">
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
				{#each allIncomes.filter( (income) => dayjs(income.date).isSame(currentDay, 'month') ) as transaction}
					<tr class="bg-green-100">
						<AppTableRowLeading>{transaction.name}</AppTableRowLeading>
						<AppTableRow>{transaction.purpose}</AppTableRow>
						<AppTableRow>{dayjs(transaction.date).format('DD.MM.YYYY HH:mm')}</AppTableRow>
						<AppTableRow>{transaction.expand.category.title}</AppTableRow>
						<AppTableRow bold={true}
							>+{new Intl.NumberFormat('de', { style: 'currency', currency: 'EUR' }).format(
								transaction.amount
							)}</AppTableRow
						>
						<AppTableRowAction
							on:click={() => {
								console.log('edit');
								plannerSlideOverOpen.set(true);
								plannerSlideOverType.set('income');
							}}
							identifier={transaction.id}>Edit</AppTableRowAction
						>
					</tr>
				{/each}
				{#each allExpenses.filter( (expense) => dayjs(expense.date).isSame(currentDay, 'month') ) as transaction}
					<tr>
						<AppTableRowLeading>{transaction.name}</AppTableRowLeading>
						<AppTableRow>{transaction.purpose}</AppTableRow>
						<AppTableRow>{dayjs(transaction.date).format('DD.MM.YYYY HH:mm')}</AppTableRow>
						<AppTableRow>{transaction.expand.category.title}</AppTableRow>
						<AppTableRow bold={true}
							>-{new Intl.NumberFormat('de', { style: 'currency', currency: 'EUR' }).format(
								transaction.amount
							)}</AppTableRow
						>
						<AppTableRowAction
							on:click={() => {
								console.log('edit');
								plannerSlideOverOpen.set(true);
								plannerSlideOverType.set('expense');
							}}
							identifier={transaction.id}>Edit</AppTableRowAction
						>
					</tr>
				{/each}
				<tr class="bg-gray-100">
					<AppTableRowLeading bold={true}>Balance</AppTableRowLeading>
					<AppTableRow />
					<AppTableRow />
					<AppTableRow />
					<AppTableRow bold={true}>
						{new Intl.NumberFormat('de', { style: 'currency', currency: 'EUR' }).format(
							allIncomes
								.filter((income) => dayjs(income.date).isSame(currentDay, 'month'))
								.reduce((acc, curr) => acc + +curr.amount, 0) -
								allExpenses
									.filter((expense) => dayjs(expense.date).isSame(currentDay, 'month'))
									.reduce((acc, curr) => acc + +curr.amount, 0)
						)}
					</AppTableRow>
					<AppTableRow />
				</tr>
			</svelte:fragment>
		</AppTable>
		<AppCalendarSlider {allExpenses} {allIncomes} />
	</div>
</ContentWrapper>

<style lang="css">
	@media (min-width: 1500px) {
		.grid-custom {
			display: grid;
			grid-gap: 1rem;
			grid-template-columns: auto;
			grid-template-columns: auto 400px;
		}
	}
</style>
