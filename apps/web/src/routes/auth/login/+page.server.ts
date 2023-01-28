import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ locals, request, url }) => {
		const body = Object.fromEntries(await request.formData());
		const provider = url.searchParams.get('provider');

		if (provider) {
			// login via auth provider
		}

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
