'use client'
import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/navigation'
import {getCookie} from 'cookies-next'

import Image from 'next/image'
import FormStudent from './formStudent'
import FormParent from './formParent'

const RegisterForm = () => {
	const router = useRouter()
	const [studentPa, setStudentPa] = useState('student')

	useEffect(() => {
		if (getCookie('accesstoken') !== undefined) router.replace('/')
	}, [router])
	return (
		<form className='bg-bg300 justify-center items-center relative rounded-md w-10/12 md:w-3/4 lg:w-2/4 h-3/5 flex '>
			<div className='flex-wrap  h-fit flex items-center w-11/12 md:w-2/4 z-10'>
				<div className='w-full mb-5 text-center text-text200 text-2xl '>
					Create Account
				</div>
				<div className='student flex gap-4 justify-center w-full  mb-5'>
					<span
						onClick={() => {
							setStudentPa('student')
						}}
						className={`bg-accent100 text-text200  rounded-md cursor-pointer p-2 w-fit h-fit ${
							studentPa === 'student' ? 'opacity-100' : 'opacity-50'
						}`}>
						student
					</span>
					<span
						onClick={() => {
							setStudentPa('parent')
						}}
						className={`text-text200 bg-accent100 rounded-md cursor-pointer p-2 w-fit h-fit ${
							studentPa === 'parent' ? 'opacity-100' : 'opacity-50'
						}`}>
						parent
					</span>
				</div>
				{studentPa === 'student' ? <FormStudent /> : <FormParent />}
			</div>
			<Image
				src='/backReg.jpg'
				alt='h'
				width={1000}
				height={1000}
				// className='w-2/4 h-full  md:block absolute rounded-r-md right-0 opacity-60'
				className='w-full md:w-2/4 h-full absolute md:relative  rounded-r-md right-0 opacity-60'
			/>
		</form>
	)
}

export default RegisterForm
