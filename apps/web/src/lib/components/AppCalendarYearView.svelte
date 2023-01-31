<script>
	import AppCalendarHeader from './AppCalendarHeader.svelte';
</script>

<div class="border rounded-lg">
	<AppCalendarHeader />
	<div class="bg-white">
		<div
			class="grid max-w-3xl grid-cols-1 px-4 py-16 mx-auto gap-x-8 gap-y-16 sm:grid-cols-2 sm:px-6 xl:max-w-none xl:grid-cols-3 xl:px-8 2xl:grid-cols-4"
		>
			<section class="text-center">
				<h2 class="font-semibold text-gray-900">January</h2>
				<div class="grid grid-cols-7 mt-6 text-xs leading-6 text-gray-500">
					<div>M</div>
					<div>T</div>
					<div>W</div>
					<div>T</div>
					<div>F</div>
					<div>S</div>
					<div>S</div>
				</div>
				<div
					class="grid grid-cols-7 gap-px mt-2 text-sm bg-gray-200 rounded-lg shadow isolate ring-1 ring-gray-200"
				>
					<!--
            Always include: "py-1.5 hover:bg-gray-100 focus:z-10"
            Is current month, include: "bg-white text-gray-900"
            Is not current month, include: "bg-gray-50 text-gray-400"

            Top left day, include: "rounded-tl-lg"
            Top right day, include: "rounded-tr-lg"
            Bottom left day, include: "rounded-bl-lg"
            Bottom right day, include: "rounded-br-lg"
          -->
					<button
						type="button"
						class="rounded-tl-lg bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
					>
						<!--
              Always include: "mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              Is today, include: "bg-indigo-600 font-semibold text-white"
            -->
						<time
							datetime="2021-12-27"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">27</time
						>
					</button>
					<button
						type="button"
						class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
					>
						<time
							datetime="2021-12-28"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">28</time
						>
					</button>
					<button
						type="button"
						class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
					>
						<time
							datetime="2021-12-29"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">29</time
						>
					</button>
					<button
						type="button"
						class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
					>
						<time
							datetime="2021-12-30"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">30</time
						>
					</button>
					<button
						type="button"
						class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
					>
						<time
							datetime="2021-12-31"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">31</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-01"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">1</time
						>
					</button>
					<button type="button" class="rounded-tr-lg bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-02"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">2</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-03"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">3</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-04"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">4</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-05"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">5</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-06"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">6</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-07"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">7</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-08"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">8</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-09"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">9</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-10"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">10</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-11"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">11</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-12"
							class="flex items-center justify-center mx-auto font-semibold text-white bg-indigo-600 rounded-full h-7 w-7"
							>12</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-13"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">13</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-14"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">14</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-15"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">15</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-16"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">16</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-17"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">17</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-18"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">18</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-19"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">19</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-20"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">20</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-21"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">21</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-22"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">22</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-23"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">23</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-24"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">24</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-25"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">25</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-26"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">26</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-27"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">27</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-28"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">28</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-29"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">29</time
						>
					</button>
					<button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-30"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">30</time
						>
					</button>
					<button type="button" class="rounded-bl-lg bg-white py-1.5 hover:bg-gray-100 focus:z-10">
						<time
							datetime="2022-01-31"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">31</time
						>
					</button>
					<button
						type="button"
						class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
					>
						<time
							datetime="2022-02-01"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">1</time
						>
					</button>
					<button
						type="button"
						class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
					>
						<time
							datetime="2022-02-02"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">2</time
						>
					</button>
					<button
						type="button"
						class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
					>
						<time
							datetime="2022-02-03"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">3</time
						>
					</button>
					<button
						type="button"
						class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
					>
						<time
							datetime="2022-02-04"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">4</time
						>
					</button>
					<button
						type="button"
						class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
					>
						<time
							datetime="2022-02-05"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">5</time
						>
					</button>
					<button
						type="button"
						class="rounded-br-lg bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
					>
						<time
							datetime="2022-02-06"
							class="flex items-center justify-center mx-auto rounded-full h-7 w-7">6</time
						>
					</button>
				</div>
			</section>
			<!-- More items... -->
		</div>
	</div>
</div>
