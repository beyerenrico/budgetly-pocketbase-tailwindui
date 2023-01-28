<script>
	// @ts-nocheck

	import {
		CheckCircle,
		ExclamationCircle,
		InformationCircle,
		XCircle,
		XMark
	} from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';

	export let type = 'success';

	const types = {
		success: 'green',
		warning: 'yellow',
		error: 'red',
		info: 'blue'
	};

	const icons = {
		success: CheckCircle,
		warning: ExclamationCircle,
		error: XCircle,
		info: InformationCircle
	};
</script>

<div class="rounded-md bg-{types[type]}-100 p-4 mt-4">
	<div class="flex">
		<div class="flex-shrink-0">
			<Icon src={icons[type]} theme="mini" class="h-5 w-5 text-{types[type]}-400" />
		</div>
		<div class="ml-3">
			<p class="text-sm font-medium text-{types[type]}-800"><slot /></p>
		</div>
		<!-- <div class="ml-auto pl-3">
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
					<Icon src={XMark} theme="mini" class="h-5 w-5" />
				</button>
			</div>
		</div> -->
	</div>
</div>
