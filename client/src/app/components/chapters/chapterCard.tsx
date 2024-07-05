'use client'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import LessonCard from './lessonCard'
const ChapterCard = () => {
	const [dataChapter, setDataChapter] = useState([])
	useEffect(() => {
		const dataChapter = async () => {
			try {
				const res = await axios.get(`${process.env.local}/chapter`)
				setDataChapter(res.data.data)
			} catch (error) {
				return toast.error('Error  !', {
					position: 'top-left',
				})
			}
		}

		dataChapter()
	}, [])
	return (
		<>
			{dataChapter.map((chapter, index) => (
				<div
					key={index}
					className='w-11/12 mb-5'>
					<div className='text-white bg-text100 text-bg100 shadow-md   rounded-md w-fit px-2 py-1 text-2xl mb-1'>
						Chapter: {chapter.name}
					</div>
					<div className='relative flex items-center  scrollbar-hide'>
						<div className='flex gap-5 overflow-x-auto scrollbar-hide w-full py-5 px-10  bg-opacity-70 bg-bg300 shadow-md rounded-md'>
							<LessonCard data={chapter.id} />
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default ChapterCard
