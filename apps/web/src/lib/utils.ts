import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import dayjs, { Dayjs } from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';

const { randomBytes } = await import('node:crypto');

export const serializeNonPOJOs = <T>(obj: T): T => {
	return structuredClone(obj);
};

export const generateUsername = (name: string): string => {
	const id = randomBytes(2).toString('hex');
	return `${name.slice(0, 5)}${id}`;
};

export const getImageURL = (
	collectionId: string,
	recordId: string,
	fileName: string,
	size = '0x0'
): string => {
	return `${PUBLIC_POCKETBASE_URL}/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size};`;
};

export const getWeekdays = (date: Dayjs) => {
	dayjs.extend(isoWeek);

	const firstDay = dayjs(date).startOf('isoWeek');
	const lastDay = dayjs(date).endOf('isoWeek');

	const weekdays = [];
	let currentDay = firstDay;

	while (currentDay <= lastDay) {
		weekdays.push(currentDay);
		currentDay = currentDay.add(1, 'day');
	}

	return weekdays;
};

export const getWeeks = (date: Dayjs) => {
	dayjs.extend(isoWeek);

	const firstDay = dayjs(date).startOf('month').startOf('isoWeek');
	const lastDay = firstDay.add(6, 'week').subtract(1, 'day');

	const weeks = [];
	let currentWeek = [];
	let currentDay = firstDay;

	while (currentDay <= lastDay) {
		currentWeek.push(currentDay);

		if (currentDay.isoWeekday() === 7) {
			weeks.push(currentWeek);
			currentWeek = [];
		}

		currentDay = currentDay.add(1, 'day');
	}

	return weeks;
};

export const getMonths = (date: Dayjs) => {
	dayjs.extend(isoWeek);

	const monthsOfYear = () => {
		const months = [];
		let currentMonth = dayjs(date).startOf('year');

		while (currentMonth <= dayjs(date).endOf('year')) {
			months.push(currentMonth);
			currentMonth = currentMonth.add(1, 'month');
		}

		return months;
	};

	return monthsOfYear();
};

export const classNames = (...classes: any[]) => {
	return classes.filter(Boolean).join(' ');
};
