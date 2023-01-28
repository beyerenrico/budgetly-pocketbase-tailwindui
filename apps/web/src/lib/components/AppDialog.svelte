<script lang="ts">
	import {
		Dialog,
		DialogOverlay,
		DialogTitle,
		Portal,
		Transition,
		TransitionChild
	} from '@rgossiaux/svelte-headlessui';

	let isOpen = false;

	function closeModal() {
		isOpen = false;
	}

	function openModal() {
		isOpen = true;
	}
</script>

<button type="button" on:click={openModal} class="w-full">
	<slot />
</button>

<Transition appear show={isOpen}>
	<Dialog as="div" class="fixed inset-0 z-10 overflow-y-auto" on:close={closeModal}>
		<div class="min-h-screen px-4 text-center">
			<TransitionChild
				enter="ease-out duration-300"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<DialogOverlay class="fixed inset-0 bg-black opacity-50" />
			</TransitionChild>

			<TransitionChild
				enter="ease-out duration-300"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<!-- This element is to trick the browser into centering the modal contents. -->
				<span class="inline-block h-screen align-middle" aria-hidden="true"> &#8203; </span>
				<div
					class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
				>
					<DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
						<slot name="headline" />
					</DialogTitle>

					<slot name="text" />

					<slot name="actions" />
				</div>
			</TransitionChild>
		</div>
	</Dialog>
</Transition>
