import React from 'react'
import Link from 'next/link'

const LinkSideBar = ({url, span, logo, color}) => {
	return (
		<Link
			href={`/admin/${url}`}
			className={`flex gap-2 mb-6 hover:text-${color} items-center justify-start`}>
			{logo}
			<span className='hidden md:block duration-300 text-xl'>{span}</span>
		</Link>
	)
}

export default LinkSideBar
