import { redirect } from '@sveltejs/kit';
import type { RequestEvent, RequestHandler } from './$types';
import { PUBLIC_OAUTH_CALLBACK_URL } from '$env/static/public';

export const GET: RequestHandler = async ({ locals, url, cookies }: RequestEvent) => {
	const redirectURL = PUBLIC_OAUTH_CALLBACK_URL;
	const expectedState = cookies.get('state');

	const query = new URLSearchParams(url.search);
	const state = query.get('state');
	const code = query.get('code');

	console.log(url);

	const authMethods = await locals.pb.collection('users').listAuthMethods();
	if (!authMethods?.authProviders) {
		console.log('authy providers');
		throw redirect(303, '/auth/login');
	}
	const provider = JSON.parse(cookies.get('provider'));
	if (!provider) {
		console.log('Provider not found');
		throw redirect(303, '/auth/login');
	}

	if (expectedState !== state) {
		console.log('state does not match expected', expectedState, state);
		throw redirect(303, '/auth/login');
	}

	try {
		await locals.pb
			.collection('users')
			.authWithOAuth2(provider.name, code || '', provider.codeVerifier, redirectURL);
	} catch (err) {
		console.log('Error logging in with OAuth user', err);
	}

	throw redirect(303, '/app');
};
