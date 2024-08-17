import LogoNavbar from './components/logo'
import NavLink from './components//links/navLink'
import AuthNav from './components/auth/auth'
const Navbar = () => {
	return (
		<div className='w-full md:w-8/12 md:translate-x-1/4 lg:w-6/12 lg:translate-x-2/4 flex justify-between  py-4 px-4 md:rounded-md bg-bg200 md:my-4 shadow-md text-xl h-16'>
			<LogoNavbar />
			<div className='flex '>
				<NavLink />
				<AuthNav />
			</div>
		</div>
	)
}

export default Navbar
