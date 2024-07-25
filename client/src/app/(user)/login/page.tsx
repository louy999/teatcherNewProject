import LoginForm from './loginForm'
import NavBar from '../../components/navbar/navbar'
import Image from 'next/image'

const LoginPage = () => {
	return (
		<div className='flex justify-center items-center w-full flex-wrap h-[calc(100vh-4rem)] '>
			<LoginForm />
			<Image
				src='/wave.svg'
				alt=''
				className='absolute w-screen bottom-0'
				width={1000}
				height={1000}
			/>
		</div>
	)
}

export default LoginPage
