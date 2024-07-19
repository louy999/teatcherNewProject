import Image from 'next/image'
import {GrView} from 'react-icons/gr'
import Link from 'next/link'
import axios from 'axios'
import {useEffect, useState} from 'react'
import ViewsLength from './viewsLength'
interface DataLessonCardProps {
	data: string
}
const LessonCard: React.FC<DataLessonCardProps> = ({data}) => {
	const [lessonData, setLessonData] = useState([]) // Initialize as an empty array

	useEffect(() => {
		const lessonDataRes = async () => {
			try {
				const res = await axios.get(`${process.env.local}/lesson/chapter/${data}`)
				setLessonData(Array(res.data.data)[0])
			} catch (error) {
				return toast.error('Error Notification !', {
					position: 'top-left',
				})
			}
		}

		lessonDataRes()
	}, [data])

	const formatDate = (dateString) => {
		const date = new Date(dateString)
		const day = date.getDate()
		const month = date.getMonth() + 1 // Months are zero-based
		const year = date.getFullYear()
		return `${day}/${month}/${year}`
	}
	const formatViewCount = (viewCount) => {
		if (viewCount >= 1000000) {
			return (viewCount / 1000000).toFixed(1) + 'm'
		} else if (viewCount >= 1000) {
			return (viewCount / 1000).toFixed(1) + 'k'
		} else {
			return viewCount.toString()
		}
	}

	return (
		<>
			{lessonData.map((lesson) => (
				<Link
					href={`/lesson/${lesson.id}`}
					key={lesson.id}
					className='card bg-white rounded-md p-5 flex-shrink-0 w-80 cursor-pointer bg-back shadow-md hover:p-3 duration-300 active:p-7'>
					<div className='rounded-md mb-2 relative'>
						<Image
							className='rounded-t-md'
							src={`${process.env.img}/image/${lesson.img}`}
							alt={lesson.name}
							width={300}
							height={300}
						/>
					</div>
					<div className='info relative'>
						<span className='absolute right-0 bg-primary300 text-back rounded-md w-fit px-1 h-10 opacity-70 flex justify-center items-center gap-1'>
							<GrView />
							<span>
								<ViewsLength lessonId={lesson.id} />
							</span>
						</span>
						<div className='name text-2xl capitalize'>Lesson: {lesson.name}</div>
						<div className='price text-md bg-accent200 text-back rounded-md w-fit px-2 py-1 opacity-70'>
							{formatViewCount(lesson.price)} EGP
						</div>
						<div className='dateCreate text-end opacity-70'>
							{formatDate(lesson.date)}
						</div>
					</div>
				</Link>
			))}
		</>
	)
}

export default LessonCard
