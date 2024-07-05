import SideBar from './components/SideBar'
export default function Layout({children}) {
	return (
		<main className='flex items-center h-[calc(100vh-4rem)] justify-center p-2 '>
			{children}
		</main>
	)
}
