import { error, redirect, type Actions } from '@sveltejs/kit';

import { recentlyCreatedCategory } from '$lib/stores';
import { serializeNonPOJOs } from '$lib/utils';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
	try {
		const planner = await locals.pb.collection('planners').getOne(params.id, {
			filter: `user = "${locals?.user?.id}"`
		});

		const categories = await locals.pb.collection('categories').getFullList(200, {
			filter: `planner = "${params.id}"`
		});

		return {
			planner: serializeNonPOJOs(planner),
			categories: serializeNonPOJOs(categories)
		};
	} catch (err: any) {
		console.log(err);
		throw error(err.status, err.message);
	}
};

export const actions: Actions = {
	updateHeadline: async ({ request, locals, params }) => {
		if (!locals.user) {
			locals.pb.authStore.clear();
			throw redirect(303, '/auth/login');
		}

		const { headline } = Object.fromEntries(await request.formData()) as {
			headline: string;
		};

		try {
			await locals.pb.collection('planners').update(params.id || '', {
				title: headline,
				user: locals.user.id
			});
		} catch (err: any) {
			console.log(err);
			throw error(err.status, err.message);
		}

		throw redirect(303, `/app/planners/${params.id}`);
	},
	updateDescription: async ({ request, locals, params }) => {
		if (!locals.user) {
			locals.pb.authStore.clear();
			throw redirect(303, '/auth/login');
		}

		const { headline, description } = Object.fromEntries(await request.formData()) as {
			headline: string;
			description: string;
		};

		try {
			await locals.pb.collection('planners').update(params.id || '', {
				title: headline,
				description: description,
				user: locals.user.id
			});
		} catch (err: any) {
			console.log(err);
			throw error(err.status, err.message);
		}

		throw redirect(303, `/app/planners/${params.id}`);
	},
	deletePlanner: async ({ request, locals }) => {
		if (!locals.user) {
			locals.pb.authStore.clear();
			throw redirect(303, '/auth/login');
		}

		const { id } = Object.fromEntries(await request.formData()) as {
			id: string;
		};

		try {
			await locals.pb.collection('planners').delete(id);
		} catch (err: any) {
			console.log(err);
			throw error(err.status, err.message);
		}

		throw redirect(303, '/app/planners');
	},
	createCategory: async ({ locals, request, params }) => {
		const { title } = Object.fromEntries(await request.formData()) as {
			title: string;
		};

		try {
			const category = await locals.pb.collection('categories').create({
				title,
				planner: params.id
			});

			return {
				category: serializeNonPOJOs(category)
			};
		} catch (err) {
			console.log(err);
		}
	},
	createExpense: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData()) as {
			sender: string;
			purpose: string;
			date: string;
			planner: string;
			category: string;
			amount: string;
		};

		try {
			await locals.pb.collection('expenses').create({
				sender: body.sender,
				purpose: body.purpose,
				date: new Date(body.date).toISOString(),
				planner: body.planner,
				category: body.category,
				amount: parseFloat(body.amount)
			});

			return {
				succes: true
			};
		} catch (err) {
			console.log(err);
		}
	},
	createIncome: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData()) as {
			sender: string;
			purpose: string;
			date: string;
			planner: string;
			category: string;
			amount: string;
		};

		try {
			await locals.pb.collection('incomes').create({
				sender: body.sender,
				purpose: body.purpose,
				date: new Date(body.date).toISOString(),
				planner: body.planner,
				category: body.category,
				amount: parseFloat(body.amount)
			});

			return {
				succes: true
			};
		} catch (err) {
			console.log(err);
		}
	}
};
