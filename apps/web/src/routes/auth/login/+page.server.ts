import { redirect, type Actions } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	try {
		const { authProviders } = await locals.pb.collection('users').listAuthMethods();

		return {
			authProviders: authProviders ?? []
		};
	} catch (err: any) {
		console.log('Error: ', err);
	}
};

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData());

		try {
			await locals.pb
				.collection('users')
				.authWithPassword(body.email as string, body.password as string);

			if (!locals.pb?.authStore?.model?.verified) {
				locals.pb.authStore.clear();

				return {
					type: 'error',
					message: 'You must verify your email before you can login'
				};
			}
		} catch (err: any) {
			console.log('Error: ', err);

			return {
				type: 'error',
				message: err.message
			};
		}

		throw redirect(303, '/app');
	}
};
