import LoginForm from './loginForm'
import NavBar from '../../components/navbar/navbar'
import Image from 'next/image'

const LoginPage = () => {
	return (
		<section className='flex justify-center items-center w-full flex-wrap h-[calc(100vh-10rem)]'>
			<LoginForm />
			<Image
				src='/nik-z1d-LP8sjuI-unsplash.jpg'
				className='absolute -top-16 -z-10 right-0 w-2/5 h-screen'
				alt=''
				width={500}
				height={1000}
			/>
		</section>
	)
}

export default LoginPage
