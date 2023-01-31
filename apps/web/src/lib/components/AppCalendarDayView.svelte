<script>
	import { AppCalendarHeader, AppCalendarSlider } from '.';
</script>

<div class="flex flex-col h-full overflow-hidden border rounded-lg">
	<AppCalendarHeader manipulator="day" />
	<div class="isolate flex flex-auto overflow-hidden bg-white h-[768px]">
		<div class="flex flex-col flex-auto overflow-auto">
			<div
				class="sticky top-0 z-10 grid flex-none grid-cols-7 text-xs text-gray-500 bg-white shadow ring-1 ring-black ring-opacity-5 md:hidden"
			>
				<button type="button" class="flex flex-col items-center pt-3 pb-1.5">
					<span>W</span>
					<!-- Default: "text-gray-900", Selected: "bg-gray-900 text-white", Today (Not Selected): "text-indigo-600", Today (Selected): "bg-indigo-600 text-white" -->
					<span
						class="flex items-center justify-center w-8 h-8 mt-3 text-base font-semibold text-gray-900 rounded-full"
						>19</span
					>
				</button>
				<button type="button" class="flex flex-col items-center pt-3 pb-1.5">
					<span>T</span>
					<span
						class="flex items-center justify-center w-8 h-8 mt-3 text-base font-semibold text-indigo-600 rounded-full"
						>20</span
					>
				</button>
				<button type="button" class="flex flex-col items-center pt-3 pb-1.5">
					<span>F</span>
					<span
						class="flex items-center justify-center w-8 h-8 mt-3 text-base font-semibold text-gray-900 rounded-full"
						>21</span
					>
				</button>
				<button type="button" class="flex flex-col items-center pt-3 pb-1.5">
					<span>S</span>
					<span
						class="flex items-center justify-center w-8 h-8 mt-3 text-base font-semibold text-white bg-gray-900 rounded-full"
						>22</span
					>
				</button>
				<button type="button" class="flex flex-col items-center pt-3 pb-1.5">
					<span>S</span>
					<span
						class="flex items-center justify-center w-8 h-8 mt-3 text-base font-semibold text-gray-900 rounded-full"
						>23</span
					>
				</button>
				<button type="button" class="flex flex-col items-center pt-3 pb-1.5">
					<span>M</span>
					<span
						class="flex items-center justify-center w-8 h-8 mt-3 text-base font-semibold text-gray-900 rounded-full"
						>24</span
					>
				</button>
				<button type="button" class="flex flex-col items-center pt-3 pb-1.5">
					<span>T</span>
					<span
						class="flex items-center justify-center w-8 h-8 mt-3 text-base font-semibold text-gray-900 rounded-full"
						>25</span
					>
				</button>
			</div>
			<div class="flex flex-auto w-full">
				<div class="flex-none bg-white w-14 ring-1 ring-gray-100" />
				<div class="grid flex-auto grid-cols-1 grid-rows-1">
					<!-- Horizontal lines -->
					<div
						class="grid col-start-1 col-end-2 row-start-1 divide-y divide-gray-100"
						style="grid-template-rows: repeat(48, minmax(3.5rem, 1fr))"
					>
						<div class="row-end-1 h-7" />
						<div>
							<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
								12AM
							</div>
						</div>
						<div />
						<div>
							<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
								1AM
							</div>
						</div>
						<div />
						<div>
							<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
								2AM
							</div>
						</div>
						<div />
						<div>
							<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
								3AM
							</div>
						</div>
						<div />
						<div>
							<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
								4AM
							</div>
						</div>
						<div />
						<div>
							<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
								5AM
							</div>
						</div>
						<div />
						<div>
							<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
								6AM
							</div>
						</div>
						<div />
						<div>
							<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
								7AM
							</div>
						</div>
						<div />
						<div>
							<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
								8AM
							</div>
						</div>
						<div />
						<div>
							<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
								9AM
							</div>
						</div>
						<div />
						<div>
							<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
								10AM
							</div>
						</div>
						<div />
						<div>
							<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
								11AM
							</div>
						</div>
						<div />
						<div>
							<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
								12PM
							</div>
						</div>
						<div />
						<div>
							<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
								1PM
							</div>
						</div>
						<div />
						<div>
							<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
								2PM
							</div>
						</div>
						<div />
						<div>
							<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
								3PM
							</div>
						</div>
						<div />
						<div>
							<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
								4PM
							</div>
						</div>
						<div />
						<div>
							<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
								5PM
							</div>
						</div>
						<div />
						<div>
							<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
								6PM
							</div>
						</div>
						<div />
						<div>
							<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
								7PM
							</div>
						</div>
						<div />
						<div>
							<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
								8PM
							</div>
						</div>
						<div />
						<div>
							<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
								9PM
							</div>
						</div>
						<div />
						<div>
							<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
								10PM
							</div>
						</div>
						<div />
						<div>
							<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
								11PM
							</div>
						</div>
						<div />
					</div>

					<!-- Events -->
					<ol
						class="grid grid-cols-1 col-start-1 col-end-2 row-start-1"
						style="grid-template-rows: 1.75rem repeat(288, minmax(0, 1fr)) auto"
					>
						<li class="relative flex mt-px" style="grid-row: 74 / span 12">
							<a
								href="#"
								class="absolute flex flex-col p-2 overflow-y-auto text-xs leading-5 rounded-lg group inset-1 bg-blue-50 hover:bg-blue-100"
							>
								<p class="order-1 font-semibold text-blue-700">Breakfast</p>
								<p class="text-blue-500 group-hover:text-blue-700">
									<time datetime="2022-01-22T06:00">6:00 AM</time>
								</p>
							</a>
						</li>
						<li class="relative flex mt-px" style="grid-row: 92 / span 30">
							<a
								href="#"
								class="absolute flex flex-col p-2 overflow-y-auto text-xs leading-5 rounded-lg group inset-1 bg-pink-50 hover:bg-pink-100"
							>
								<p class="order-1 font-semibold text-pink-700">Flight to Paris</p>
								<p class="order-1 text-pink-500 group-hover:text-pink-700">
									John F. Kennedy International Airport
								</p>
								<p class="text-pink-500 group-hover:text-pink-700">
									<time datetime="2022-01-22T07:30">7:30 AM</time>
								</p>
							</a>
						</li>
						<li class="relative flex mt-px" style="grid-row: 134 / span 18">
							<a
								href="#"
								class="absolute flex flex-col p-2 overflow-y-auto text-xs leading-5 rounded-lg group inset-1 bg-indigo-50 hover:bg-indigo-100"
							>
								<p class="order-1 font-semibold text-indigo-700">Sightseeing</p>
								<p class="order-1 text-indigo-500 group-hover:text-indigo-700">Eiffel Tower</p>
								<p class="text-indigo-500 group-hover:text-indigo-700">
									<time datetime="2022-01-22T11:00">11:00 AM</time>
								</p>
							</a>
						</li>
					</ol>
				</div>
			</div>
		</div>
		<div class="flex-none hidden w-1/2 max-w-md px-8 py-10 border-l border-gray-100 md:block">
			<AppCalendarSlider />
		</div>
	</div>
</div>
