import { error, type Actions } from '@sveltejs/kit';

import { serializeNonPOJOs } from '$lib/utils';
import { categorySlideOverOpen } from '$lib/stores';

export const actions: Actions = {
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
			throw error(err.status, err.message);
		}
	},
	updateCategory: async ({ locals, request, params }) => {
		const { id, title } = Object.fromEntries(await request.formData()) as {
			id: string;
			title: string;
		};

		try {
			const category = await locals.pb.collection('categories').update(id, {
				title,
				planner: params.id
			});

			return {
				category: serializeNonPOJOs(category)
			};
		} catch (err) {
			console.log(err);
			throw error(err.status, err.message);
		}
	},
	deleteCategory: async ({ locals, request }) => {
		const { id } = Object.fromEntries(await request.formData()) as {
			id: string;
		};

		try {
			await locals.pb.collection('categories').delete(id);

			return {
				success: true
			};
		} catch (err) {
			console.log(err);
			throw error(err.status, err.message);
		}
	}
};
