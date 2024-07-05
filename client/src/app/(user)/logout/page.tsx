'use client'
import {useEffect} from 'react'
const Logout = () => {
	useEffect(() => {
		window.location.pathname = '/'
		setTimeout(() => {
			window.location.reload()
		}, 3000)
	}, [])
	return (
		<div className='h-screen w-screen flex justify-center items-center'>
			<div className='flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700'>
				<div className='px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200'>
					loading...
				</div>
			</div>
		</div>
	)
}

export default Logout
