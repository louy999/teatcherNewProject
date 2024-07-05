import SideBar from './components/sideBar'
export default function Layout({children}) {
	return (
		<main className='flex items-center gap-10 h-[calc(100vh-4rem)]  '>
			<SideBar />
			{children}
		</main>
	)
}
