'use client'
import {useEffect, useState} from 'react'
import axios from 'axios'
import StudentInfo from './StudentInfo'
import {useRouter, useSearchParams} from 'next/navigation'
import Image from 'next/image'

const InfoStudentFromParent = ({id, token}) => {
	const {replace} = useRouter()
	const searchParams = useSearchParams()
	const [data, setData] = useState([])
	useEffect(() => {
		const fetchDate = async () => {
			const res = await axios.get(`${process.env.local}/student/${id}`, {
				headers: {accesstoken: token},
			})
			setData(res.data.data)
		}
		fetchDate()
	}, [id, token])

	return (
		<>
			{searchParams.get('stu') === data.phone ? (
				<div className='w-full h-fit flex justify-center items-center'>
					<div className='container flex  justify-around h-80 w-full  shadow-md items-center bg-bg200 rounded-md py-4'>
						<div className='info z-10 bg-bg200'>
							<div className='name mb-4'>
								<span className='title text-accent200 capitalize'>name:</span>
								<span className='info ml-2'>{data.username}</span>
							</div>
							<div className='phone mb-4'>
								<span className='title text-accent200 capitalize'>phone:</span>
								<span className='info ml-2'>{data.phone}</span>
							</div>
							<div className='year mb-4'>
								<span className='title text-accent200 capitalize'>year:</span>
								<span className='info ml-2'>{data.stage} year</span>
							</div>
						</div>
						<div className='img'>
							<Image
								src={`${process.env.img}/image/${data.imgprofile}`}
								alt='profile img'
								width={200}
								height={200}
								className='rounded-full md:w-50 md:h-50 w-36 h-36 border-4 border-accent200 md:p-2 p-1 bg-cover '
							/>
						</div>
					</div>
				</div>
			) : (
				''
			)}
		</>
	)
}

export default InfoStudentFromParent
