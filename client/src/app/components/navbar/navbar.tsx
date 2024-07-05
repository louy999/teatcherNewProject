import LogoPage from './logo'
import NotificationPage from './Notification'
import LivePage from './Live'
import AuthPage from './auth'
import {cookies} from 'next/headers'

const NavBar = () => {
	return (
		<section className='flex bg-black bg-opacity-20 shadow-md text-slate-200 fixed w-full md:w-3/4 lg:w-2/4 md:top-2 left-2/4 -translate-x-2/4 py-2 px-4 md:rounded-lg h-14 items-center justify-between z-[23456789]'>
			<div className='logo'>
				<LogoPage />
			</div>
			<div className='flex items-center gap-8'>
				<div className='flex items-center gap-2'>
					<LivePage />
					<NotificationPage />
				</div>
				<AuthPage />
			</div>
		</section>
	)
}

export default NavBar
