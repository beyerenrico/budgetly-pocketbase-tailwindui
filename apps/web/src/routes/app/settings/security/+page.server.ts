import { error, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData());

		if (!locals.user) {
			throw redirect(303, '/auth/login');
		}

		try {
			await locals.pb.collection('users').update(locals.user.id, data);
			locals.pb.authStore.clear();
		} catch (err) {
			console.log('Error: ', err);

			throw error(400, 'Something went wrong while we tried to update your profile');
		}

		throw redirect(
			303,
			'/auth/login?type=success&message=Your+password+has+been+changed.+Please+login+with+your+new+credentials'
		);
	}
};
