import React from 'react'
import Link from 'next/link'

const SimpleAuth = () => {
	return (
		<div className=''>
			<Link
				href='#'
				className='mr-3 bg-primary300 text-bg100 px-3 py-2  rounded-md hover:bg-primary100 duration-300 active:p-1'>
				Login
			</Link>
			<Link
				href='register'
				className=' hover:text-bg100 px-3 py-2  rounded-md hover:bg-primary100 duration-300 active:p-1 '>
				Register
			</Link>
		</div>
	)
}

export default SimpleAuth
