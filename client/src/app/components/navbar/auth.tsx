import Link from 'next/link'
import {cookies} from 'next/headers'
import {CgProfile} from 'react-icons/cg'
import {IoIosLogOut} from 'react-icons/io'

const AuthPage = () => {
	const cookieStore = cookies()
	const login = cookieStore.get('accesstoken')

	return (
		<div className='flex items-center gap-3 capitalize'>
			{login === undefined ? (
				<>
					<Link
						href='/login'
						className='cursor-pointer hover:bg-black text-accent200 hover:bg-accent200 hover:text-back  hover:py-1 hover:px-2 active:p-1 rounded-lg duration-300'>
						login
					</Link>
					<Link
						href='/register'
						className='cursor-pointer hover:bg-black text-accent200 hover:bg-accent200 hover:text-back  hover:py-1 hover:px-2 active:p-1 rounded-lg duration-300'>
						register
					</Link>
				</>
			) : (
				<>
					<Link
						href='/profile'
						className='text-xl relative flex text-primary300 hover:bg-primary300 hover:text-back duration-300 rounded-md hover:py-1 hover:px-2 active:p-1  justify-center items-center gap-2'>
						<span>
							<CgProfile />
						</span>
						<span className='hidden md:inline'>Profile</span>
					</Link>
					<Link
						href='/logout'
						className='text-xl relative flex text-primary300 hover:bg-primary300 hover:text-back duration-300 rounded-md hover:py-1 hover:px-2 active:p-1  justify-center items-center gap-2'>
						<span>
							<IoIosLogOut />
						</span>
						<span className='hidden md:inline'>Logout</span>
					</Link>
				</>
			)}
		</div>
	)
}

export default AuthPage
