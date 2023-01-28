import { serializeNonPOJOs } from '$lib/utils';
import { error } from '@sveltejs/kit';
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
