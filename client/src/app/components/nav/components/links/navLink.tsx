import React from 'react'
import Link from 'next/link'
import {FaVideo} from 'react-icons/fa'

import Notification from './notification'
const NavLink = () => {
	return (
		<div className='mr-4 flex items-center justify-between text-2xl '>
			<Notification />
			<Link
				href=''
				className='ml-2'>
				<FaVideo />
			</Link>
		</div>
	)
}

export default NavLink
