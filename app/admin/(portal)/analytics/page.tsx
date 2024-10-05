export default function Analytics() {
	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">Analytics</h1>
			<div className="bg-white shadow overflow-hidden sm:rounded-lg">
				<div className="px-4 py-5 sm:px-6">
					<h3 className="text-lg leading-6 font-medium text-gray-900">
						Site Analytics
					</h3>
				</div>
				<div className="border-t border-gray-200">
					<dl>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">
								Total Visits
							</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								10,000
							</dd>
						</div>
						<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">
								Average Time on Site
							</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								2 minutes 30 seconds
							</dd>
						</div>
					</dl>
				</div>
			</div>
			{/* Add more analytics features here */}
		</div>
	);
}