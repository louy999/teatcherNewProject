import React from 'react'

const AccessF = ({data}) => {
	return (
		<div className='relative border-2 p-2 border-black h-fit overflow-x-auto shadow-md sm:rounded-lg w-full'>
			<h2>student</h2>

			<table className='w-full text-sm text-left rtl:text-right text-gray-500 d:text-gray-400'>
				<thead className='text-xs text-gray-700 uppercase bg-gray-50 d:bg-gray-700 d:text-gray-400'>
					<tr>
						<th
							scope='col'
							className='px-6 py-3 w-2/4'>
							username
						</th>
						<th
							scope='col'
							className='px-6 py-3 w-1/4'>
							Phone
						</th>
						<th
							scope='col'
							className='px-6 py-3 w-1/4'>
							stage
						</th>

						<th
							scope='col'
							className='px-6 py-3 w-1/4'>
							<span className='sr-only'>Edit</span>
						</th>
					</tr>
				</thead>
				<tbody>
					{data?.map((d, i) => (
						<tr
							key={i}
							className='bg-white border-b d:bg-gray-800 d:border-gray-700 hover:bg-gray-50 d:hover:bg-gray-600'>
							<th
								scope='row'
								className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap d:text-white'>
								{d.username}
							</th>
							<td className='px-6 py-4'>{d.phone}</td>
							<td className='px-6 py-4'>{d.stage}</td>
							<td className='px-6 py-4 text-right'>
								<a
									href='#'
									className='font-medium text-blue-600 d:text-blue-500 hover:underline'>
									Edit
								</a>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default AccessF
