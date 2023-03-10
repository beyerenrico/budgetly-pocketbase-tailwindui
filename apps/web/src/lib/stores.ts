import { writable } from 'svelte/store';

import dayjs, { type Dayjs, type ManipulateType } from 'dayjs';

import type { Record } from 'pocketbase';

const createDateStore = () => {
	const { subscribe, set, update } = writable<Dayjs>(dayjs());

	return {
		subscribe,
		set,
		update,
		add: (amount: number, unit: ManipulateType) => update((value) => value.add(amount, unit)),
		subtract: (amount: number, unit: ManipulateType) =>
			update((value) => value.subtract(amount, unit)),
		reset: () => set(dayjs())
	};
};

export const currentDate = createDateStore();
export const calendarView = writable<'day' | 'week' | 'month' | 'year'>('year');
export const currentPlanner = writable<string | undefined>(undefined);
export const offCanvasMenuOpen = writable<boolean>(false);
export const recentlyCreatedCategory = writable<Record>(undefined);

export const categorySlideOverOpen = writable<boolean>(false);
export const categorySlideOverEditMode = writable<boolean>(false);
export const categorySlideOverRecord = writable<Record>(undefined);

export const plannerSlideOverOpen = writable<boolean>(false);
export const plannerSlideOverType = writable<'expense' | 'income'>('expense');
export const plannerSlideOverEditMode = writable<boolean>(false);
export const plannerSlideOverRecord = writable<Record>(undefined);
