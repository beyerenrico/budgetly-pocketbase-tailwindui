import { error } from '@sveltejs/kit';

import { serializeNonPOJOs } from '$lib/utils';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, params }) => {
	try {
		const planner = await locals.pb.collection('planners').getOne(params.id, {
			filter: `user = "${locals?.user?.id}"`
		});

		const categories = await locals.pb.collection('categories').getFullList(200, {
			filter: `planner = "${params.id}"`
		});

		const expenses = await locals.pb.collection('expenses').getFullList(200, {
			filter: `planner = "${params.id}"`,
			sort: 'date'
		});

		const incomes = await locals.pb.collection('incomes').getFullList(200, {
			filter: `planner = "${params.id}"`,
			sort: 'date'
		});

		return {
			planner: serializeNonPOJOs(planner),
			categories: serializeNonPOJOs(categories),
			allExpenses: serializeNonPOJOs(expenses),
			allIncomes: serializeNonPOJOs(incomes)
		};
	} catch (err: any) {
		console.log(err);
		throw error(err.status, err.message);
	}
};
