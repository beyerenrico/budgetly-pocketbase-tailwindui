import { error, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const { email } = Object.fromEntries(await request.formData()) as {
			email: string;
		};

		try {
			await locals.pb.collection('users').requestPasswordReset(email);

			return {
				type: 'success',
				message: 'We have sent you an email to change your password'
			};
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong. Please try again.');
		}
	}
};
