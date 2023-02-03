<script lang="ts">
	import { classNames } from '$lib/utils';
	import dayjs from 'dayjs';

	export let link: string;
	export let headline: string;
	export let subline: string;
	export let amount: number;
	export let date: string;
	export let type: 'income' | 'expense';
</script>

<li class="relative flex">
	<a
		href={link}
		class={classNames(
			type === 'income' ? 'bg-green-50 hover:bg-green-100' : 'bg-red-50 hover:bg-red-100',
			'flex flex-col p-2 overflow-y-auto text-xs leading-5 rounded-lg w-full'
		)}
	>
		<div class="flex order-1 mt-1 w-full justify-between items-end">
			<div>
				<p
					class={classNames(type === 'income' ? 'text-green-700' : 'text-red-700', 'font-semibold')}
				>
					{headline}
				</p>
				<p class={classNames(type === 'income' ? 'text-green-700' : 'text-red-700', 'font-normal')}>
					{subline}
				</p>
			</div>
			<p
				class={classNames(type === 'income' ? 'text-green-800' : 'text-red-800', 'text-[1rem] p-2')}
			>
				+ {new Intl.NumberFormat('de-DE', {
					style: 'currency',
					currency: 'EUR'
				}).format(amount)}
			</p>
		</div>
		<p
			class={classNames(
				type === 'income'
					? 'text-green-500 group-hover:text-green-700'
					: 'text-red-500 group-hover:text-red-700'
			)}
		>
			<time datetime={dayjs(date).toISOString()}>{dayjs(date).format('DD.MM.YY HH:mm')}</time>
		</p>
	</a>
</li>
