<script lang="ts">
	import { offCanvasMenuOpen } from '$lib/stores';
	import { getImageURL } from '$lib/utils';
	import type { Admin, Record } from 'pocketbase';

	export let user: Record | Admin | null;
</script>

<div class="flex flex-shrink-0 border-t border-gray-200 p-4">
	<a
		href="/app/settings/account"
		class="group block w-full flex-shrink-0"
		on:click={() => offCanvasMenuOpen.set(false)}
	>
		<div class="flex items-center">
			<div>
				<img
					class="inline-block h-9 w-9 md:h-7 md:w-7 xl:h-9 xl:w-9 rounded-full object-cover"
					src={user?.avatar
						? getImageURL(user?.collectionId, user?.id, user?.avatar)
						: `https://ui-avatars.com/api/?name=${user?.name}`}
					alt={user?.name}
				/>
			</div>
			<div class="ml-3 md:hidden xl:block">
				<p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">{user?.name}</p>
				<p class="text-xs font-medium text-gray-500 group-hover:text-gray-700">View account</p>
			</div>
		</div>
	</a>
</div>
