import { serializeNonPOJOs } from '$lib/utils';
import { error, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	try {
		const results = await locals.pb.collection('planners').getFullList(200, {
			filter: `user = "${locals?.user?.id}"`
		});

		return {
			planners: serializeNonPOJOs(results)
		};
	} catch (err: any) {
		console.log(err);
		// throw error(err.status, err.message)
	}
};

export const actions: Actions = {
	createPlanner: async ({ request, locals }) => {
		console.log(request, locals);
		if (!locals.user) {
			locals.pb.authStore.clear();
			throw redirect(303, '/auth/login');
		}

		let planner;

		try {
			planner = await locals.pb.collection('planners').create({
				title: 'My new Planner',
				description: 'Describe what your planner is all about',
				user: locals.user.id
			});
		} catch (err) {
			console.log(err);
			throw error(err.status, err.message);
		}

		throw redirect(303, `/app/planners/${planner.id}`);
	}
};
