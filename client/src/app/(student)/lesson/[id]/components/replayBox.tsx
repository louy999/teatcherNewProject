'use client'
import React, {useEffect, useState} from 'react'
import axios from 'axios'

const ReplayBox = ({url}) => {
	const [store, setStore] = useState([])
	useEffect(() => {
		const data = async () => {
			try {
				const res = await axios.get(`${process.env.local}/replay/comment/${url.id}`)
				setStore(res.data.data)
			} catch (error) {
				return toast.error('Error  !', {
					position: 'top-left',
				})
			}
		}
		data()
	}, [url])

	const formatDate = (dateString) => {
		const date = new Date(dateString)
		const day = date.getDate()
		const month = date.getMonth() + 1 // Months are zero-based
		const year = date.getFullYear()
		return `${day}/${month}/${year}`
	}
	return (
		// <div className='w-full flex justify-end'>
		<>
			{store?.map(
				(s, i) => (
					<article
						className='w-11/12 mb-5 md:6/12 p-2 md:py-4 rounded-md  bg-slate-200'
						key={i}>
						<div className='flex items-center mb-2'>
							<div className='font-medium '>
								<p className='text-black'>
									{s.username}
									<span className='block text-sm text-gray-500'>
										{formatDate(s.date)}
									</span>
								</p>
							</div>
						</div>
						<p className='mb-2 text-gray-500 '>{s.description}</p>
					</article>
				)
				// </div>
			)}
		</>
	)
}

export default ReplayBox
