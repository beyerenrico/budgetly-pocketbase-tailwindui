import { writable } from 'svelte/store';

export const calendarView = writable<'day' | 'week' | 'month' | 'year'>('year');
export const offCanvasMenuOpen = writable<boolean>(false);
