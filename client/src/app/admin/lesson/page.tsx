'use client'
import axios from 'axios'
import {useEffect, useState} from 'react'
import ChapterComponent from './components/chapterComponent'
import AddLessonButton from './components/addLessonButton'

const LessonAdmin = () => {
	const [data, setData] = useState([])
	useEffect(() => {
		const dataChapterFetch = async () => {
			try {
				const res = await axios.get(`${process.env.local}/chapter`)
				setData(res.data.data)
			} catch (error) {
				console.log(error)
			}
		}
		dataChapterFetch()
	}, [])

	return (
		<div
			className={`bg-bg300 w-11/12 md:w-10/12 p-2 rounded-md h-[80vh] overflow-x-hidden overflow-y-auto`}>
			<div>
				<div className='header flex items-center justify-between p-1 border-b-2 border-black'>
					<div>Chapter&Lesson</div>
					<AddLessonButton dataName={data} />
				</div>
				<div className='body'>
					<ChapterComponent data={data} />
				</div>
			</div>
		</div>
	)
}

export default LessonAdmin
