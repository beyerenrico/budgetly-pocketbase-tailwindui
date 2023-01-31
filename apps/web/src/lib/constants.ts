import { Home, ListBullet } from '@steeze-ui/heroicons';

const navigationElements = [
	{
		title: 'Dashboard',
		href: '/app',
		icon: Home
	},
	{
		title: 'Planners',
		href: '/app/planners',
		icon: ListBullet
	}
];

const views: {
	name: 'day' | 'week' | 'month' | 'year';
	label: string;
}[] = [
	{
		name: 'day',
		label: 'Day'
	},
	{
		name: 'week',
		label: 'Week'
	},
	{
		name: 'month',
		label: 'Month'
	},
	{
		name: 'year',
		label: 'Year'
	}
];

const daysOfWeek: Record<number, string> = {
	1: 'Monday',
	2: 'Tuesday',
	3: 'Wednesday',
	4: 'Thursday',
	5: 'Friday',
	6: 'Saturday',
	7: 'Sunday'
};

export { navigationElements, views, daysOfWeek };
