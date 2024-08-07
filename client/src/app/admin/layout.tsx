import SideBar from './components/sideBar'
export default function Layout({children}) {
	return (
		<main className='flex items-center gap-1 md:gap-10 h-[calc(100vh-5rem)]  '>
			<SideBar />
			{children}
		</main>
	)
}
