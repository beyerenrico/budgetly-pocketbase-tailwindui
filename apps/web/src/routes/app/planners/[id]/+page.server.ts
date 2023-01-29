import { serializeNonPOJOs } from '$lib/utils';
import { error, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
	try {
		const results = await locals.pb.collection('planners').getOne(params.id, {
			filter: `user = "${locals?.user?.id}"`
		});

		return {
			planner: serializeNonPOJOs(results)
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
	}
};
