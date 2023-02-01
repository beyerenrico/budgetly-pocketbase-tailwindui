<script lang="ts">
	import { classNames } from '$lib/utils';
	import {
		CheckCircle,
		ExclamationCircle,
		InformationCircle,
		XCircle,
		XMark
	} from '@steeze-ui/heroicons';
	import type { IconSource } from '@steeze-ui/heroicons/types';
	import { Icon } from '@steeze-ui/svelte-icon';

	export let type = 'success';

	const icons: Record<string, IconSource> = {
		success: CheckCircle,
		warning: ExclamationCircle,
		error: XCircle,
		info: InformationCircle
	};
</script>

<div
	class={classNames(
		type === 'success' && 'bg-green-50',
		type === 'warning' && 'bg-yellow-50',
		type === 'error' && 'bg-red-50',
		type === 'info' && 'bg-blue-50',
		'rounded-md p-4 mt-4'
	)}
>
	<div class="flex">
		<div class="flex-shrink-0">
			<Icon
				src={icons[type]}
				theme="mini"
				class={classNames(
					type === 'success' && 'text-green-400',
					type === 'warning' && 'text-yellow-400',
					type === 'error' && 'text-red-400',
					type === 'info' && 'text-blue-400',
					'w-5 h-5'
				)}
			/>
		</div>
		<div class="ml-3">
			{#if $$slots.default}
				<h3
					class={classNames(
						type === 'success' && 'text-green-800',
						type === 'warning' && 'text-yellow-800',
						type === 'error' && 'text-red-800',
						type === 'info' && 'text-blue-800',
						'text-sm font-medium'
					)}
				>
					<slot />
				</h3>
			{/if}
			{#if $$slots.description}
				<div
					class={classNames(
						$$slots.default && 'mt-2',
						type === 'success' && 'text-green-700',
						type === 'warning' && 'text-yellow-700',
						type === 'error' && 'text-red-700',
						type === 'info' && 'text-blue-700',
						'text-sm'
					)}
				>
					<p>
						<slot name="description" />
					</p>
				</div>
			{/if}
		</div>
		<!-- <div class="pl-3 ml-auto">
			<div class="-mx-1.5 -my-1.5">
				<button
					type="button"
					class="inline-flex rounded-md bg-{types[type]}-100 p-1.5 text-{types[
						type
					]}-500 hover:bg-{types[type]}-100 focus:outline-none focus:ring-2 focus:ring-{types[
						type
					]}-600 focus:ring-offset-2 focus:ring-offset-{types[type]}-50"
				>
					<span class="sr-only">Dismiss</span>
					<Icon src={XMark} theme="mini" class="w-5 h-5" />
				</button>
			</div>
		</div> -->
	</div>
</div>
