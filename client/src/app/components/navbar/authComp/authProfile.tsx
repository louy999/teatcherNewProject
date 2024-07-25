import {CgProfile} from 'react-icons/cg'
import {IoIosLogOut} from 'react-icons/io'
import Link from 'next/link'

const AuthProfile = () => {
	return (
		<>
			<Link
				href='/profile'
				className='text-xl relative flex  bg-accent100 text-text200 hover:bg-opacity-0 hover:text-text100 hover:p-0 duration-300 rounded-md py-1 px-2 active:p-1  justify-center items-center gap-2'>
				<span>
					<CgProfile />
				</span>
				<span className='hidden md:inline'>Profile</span>
			</Link>
			<Link
				href='/logout'
				className='text-xl relative flex text-accent200 hover:bg-text100 hover:text-bg100 duration-300 rounded-md hover:py-1 hover:px-2 active:p-1  justify-center items-center gap-2'>
				<span>
					<IoIosLogOut />
				</span>
				<span className='hidden md:inline text-base'>Logout</span>
			</Link>
		</>
	)
}

export default AuthProfile
