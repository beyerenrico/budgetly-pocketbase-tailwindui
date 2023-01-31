<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { ContentWrapper } from '.';

	export let headline: string = '';
	export let description: string = '';
	export let withAction: boolean = false;
	export let action: string = '';
	export let actionLabel: string = '';
	let headlineForm: HTMLFormElement;
	let descriptionForm: HTMLFormElement;
	let loading: boolean = false;

	const onSubmit = () => {
		loading = true;

		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					break;
				case 'error':
					break;
				default:
					await applyAction(result);
					break;
			}

			loading = false;
			update();
		};
	};
</script>

<ContentWrapper {headline} {description} {withAction} {action} {actionLabel}>
	<svelte:fragment slot="headline">
		<form action="?/updateHeadline" method="POST" bind:this={headlineForm} use:enhance={onSubmit}>
			<input
				type="text"
				name="headline"
				class="block w-full max-w-2xl p-0 text-lg font-medium leading-6 text-gray-900 bg-transparent border-none"
				value={headline}
				on:blur={() => headlineForm.submit()}
				disabled={loading}
			/>
		</form>
	</svelte:fragment>
	<svelte:fragment slot="description">
		{#if description}
			<form
				action="?/updateDescription"
				method="POST"
				bind:this={descriptionForm}
				use:enhance={onSubmit}
			>
				<input
					type="text"
					name="description"
					class="block w-full max-w-2xl p-0 mt-1 text-sm text-gray-500 bg-transparent border-none"
					value={description}
					on:blur={() => descriptionForm.submit()}
					disabled={loading}
				/>
				<input type="hidden" name="headline" value={headline} />
			</form>
		{/if}
	</svelte:fragment>
	<svelte:fragment slot="action">
		{#if $$slots.action}
			<slot name="action" />
		{:else}
			<form {action} method="POST">
				<button
					type="submit"
					class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>{actionLabel}</button
				>
			</form>
		{/if}
	</svelte:fragment>
	<slot />
</ContentWrapper>
