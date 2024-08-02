'use client'
import React, {useEffect, useState} from 'react'
import {toast} from 'react-toastify'
import {useRouter} from 'next/navigation'
import axios from 'axios'

const FormStudent = () => {
    const router = useRouter()
	const [phone, setPhone] = useState('')
	const [password, setPassword] = useState('')
	const [username, setUsername] = useState('')
	const [stage, setStage] = useState('1')
	const [imgprofile, setImgprofile] = useState('')
	const [access, setAccess] = useState('')
	const [err, setErr] = useState('')
	const [loading, setLoading] = useState(false)

	const handelSubmit = async (e) => {

		e.preventDefault()
		if (phone === '')
			return toast.warn('Warning Enter your phone !', {
				position: 'top-left',
			})
		if (password === '')
			return toast.warn('Warning your password !', {
				position: 'top-left',
			})
		if (username === '')
			return toast.warn('Warning your username !', {
				position: 'top-left',
			})
		try {
			setLoading(true)
			const res = await axios.post(`${process.env.local}/student`, {
				phone,
				password,
				username,
				stage,
				imgprofile,
				access,
			})

			router.replace('/login')

			return toast.success('Register successfully', {
				position: 'top-left',
			})
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}
	return (
		<div className='flex justify-center  gap-2 flex-wrap px-4'>
			<div className='w-full flex items-center gap-1'>
				<span className='bg-primary300 text-bg100 rounded-md py-2 px-1 '>+20</span>
				<input
					type='text'
					className='w-full focus:bg-bg100 rounded-md py-2 px-1'
					placeholder='Enter your number'
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					pattern='[0-9]*' // Only allow numeric input
					title='Please enter numbers only'
				/>
			</div>
			<input
				type='text'
				className='w-3/4 focus:bg-bg100 rounded-md py-2 px-1'
				placeholder='Enter your name'
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				pattern='[A-Za-z]*' // Only allow English letters
				title='Please enter English letters only'
			/>
			<select
				name='stage'
				className='focus:bg-bg100'
				value={stage}
				onChange={(e) => setStage(e.target.value)}
				id='stage'>
				<option disabled>option</option>
				<option value='1'>Stage 1</option>
				<option value='2'>Stage 2</option>
				<option value='3'>Stage 3</option>
			</select>
			<input
				type='password'
				className='w-full focus:bg-bg100 rounded-md py-2 px-1 '
				placeholder='Enter your password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			{!loading ? (
				<input
					type='submit'
					value='Login'
					className='bg-accent100 cursor-pointer w-fit py-3 px-10 rounded-md text-bg100 active:p-2 duration-300'
					onClick={handelSubmit}
				/>
			) : (
				<>
					<button
						disabled
						type='button'
						className='text-white bg-accent200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  inline-flex items-center'>
						<svg
							aria-hidden='true'
							role='status'
							className='inline w-4 h-4 me-3 text-white animate-spin'
							viewBox='0 0 100 101'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
								fill='#E5E7EB'
							/>
							<path
								d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
								fill='currentColor'
							/>
						</svg>
						Loading...
					</button>
				</>
			)}
		</div>
	)
}

export default FormStudent
