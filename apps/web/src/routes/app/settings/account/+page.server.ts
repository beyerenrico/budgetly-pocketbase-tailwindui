import { serializeNonPOJOs } from '$lib/utils';
import { error, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	let linkedExternalAuths;
	let availableExternalAuths;

	try {
		linkedExternalAuths = await locals.pb
			.collection('users')
			.listExternalAuths(locals?.pb?.authStore?.model?.id ?? '');
	} catch (err) {
		console.log(err);
	}

	try {
		availableExternalAuths = await locals.pb.collection('users').listAuthMethods();
	} catch (err) {
		console.log(err);
	}

	return {
		linkedExternalAuths: serializeNonPOJOs(linkedExternalAuths?.map((x) => x.provider)),
		availableExternalAuths: serializeNonPOJOs(
			availableExternalAuths?.authProviders.sort((a, b) => {
				if (a.name < b.name) {
					return -1;
				}
				if (a.name > b.name) {
					return 1;
				}
				return 0;
			})
		)
	};
};

export const actions: Actions = {
	updateAccount: async ({ request, locals }) => {
		// eslint-disable-next-line prefer-const
		let data = await request.formData();

		const userAvatar = data.get('avatar');

		if (userAvatar?.size === 0) {
			data.delete('avatar');
		}

		if (!locals.user) {
			throw redirect(303, '/auth/login');
		}

		try {
			const { name, avatar } = await locals.pb.collection('users').update(locals.user.id, data);
			locals.user.name = name;
			locals.user.avatar = avatar;
		} catch (err) {
			console.log('Error: ', err);

			throw error(400, 'Something went wrong while we tried to update your profile');
		}

		return {
			type: 'success',
			message: 'Your profile has been updated'
		};
	},
	deleteAccount: async ({ locals }) => {
		try {
			await locals.pb.collection('users').delete(locals.user.id);
		} catch (err) {
			console.log(err);
			throw error(err.status, err.message);
		}

		redirect(303, '/');
	},
	unlinkExternalProvider: async ({ request, locals }) => {
		const { provider } = Object.fromEntries(await request.formData()) as {
			provider: string;
		};

		try {
			locals.pb.collection('users').unlinkExternalAuth(locals.pb.authStore.model.id, provider);
		} catch (err) {
			throw error(err.status, err.message);
		}

		throw redirect(303, '/app/settings/account');
	}
};
