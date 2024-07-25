import React from 'react'
import Link from 'next/link';

const LoginReg = () => {
  return (
			<>
				<Link
					href='/login'
					className='cursor-pointer text-text200 hover:text-bg100 hover:bg-text200  hover:py-1 hover:px-2 active:p-1 rounded-lg duration-300'>
					login
				</Link>
				<Link
					href='/register'
					className='cursor-pointer text-text200 hover:text-bg100 hover:bg-text200  hover:py-1 hover:px-2 active:p-1 rounded-lg duration-300'>
					register
				</Link>
			</>
		)
}

export default LoginReg