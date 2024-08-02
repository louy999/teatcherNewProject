'use client'
import {useEffect, useState} from 'react'
import axios from 'axios'
import StudentInfo from './StudentInfo'
import {useRouter, useSearchParams} from 'next/navigation'

const LinksPhoneStudent = ({id, token}) => {
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
		<div
			className={` rounded-md py-2 px-1 ss duration-300  cursor-pointer text-sm ${
				data?.phone === searchParams.get('stu')
					? 'relative md:left-5 bg-bg200 text-accent200 '
					: 'bg-accent100 text-text100 shadow-md'
			} `}
			onClick={() => replace(`?stu=${data.phone}`)}>
			{data.username}
		</div>
	)
}

export default LinksPhoneStudent
