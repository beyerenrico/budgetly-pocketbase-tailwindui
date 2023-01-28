import { generateUsername } from '$lib/utils';
import { error, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const { name, email, password, passwordConfirm } = Object.fromEntries(
			await request.formData()
		) as {
			name: string;
			email: string;
			password: string;
			passwordConfirm: string;
		};

		const username = generateUsername(name.split(' ').join('')).toLowerCase();

		try {
			await locals.pb.collection('users').create({
				username,
				name,
				email,
				password,
				passwordConfirm
			});
			await locals.pb.collection('users').requestVerification(email);
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong. Please try again.');
		}

		throw redirect(303, '/auth/login');
	}
};
