import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	createIncome: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData()) as {
			name: string;
			purpose: string;
			date: string;
			planner: string;
			category: string;
			amount: string;
		};

		try {
			await locals.pb.collection('incomes').create({
				name: body.name,
				purpose: body.purpose,
				date: new Date(body.date).toISOString(),
				planner: body.planner,
				category: body.category,
				amount: parseFloat(body.amount)
			});

			return {
				succes: true
			};
		} catch (err) {
			console.log(err);
		}
	},
	updateIncome: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData()) as {
			id: string;
			name: string;
			purpose: string;
			date: string;
			planner: string;
			category: string;
			amount: string;
		};

		try {
			await locals.pb.collection('incomes').update(body.id, {
				name: body.name,
				purpose: body.purpose,
				date: new Date(body.date).toISOString(),
				planner: body.planner,
				category: body.category,
				amount: parseFloat(body.amount)
			});

			return {
				succes: true
			};
		} catch (err) {
			console.log(err);
		}
	}
};
