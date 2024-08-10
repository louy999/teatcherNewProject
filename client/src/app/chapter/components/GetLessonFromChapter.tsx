import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
interface chapterIdType {
	id: string
}
const GetLessonFromChapter: React.FC<chapterIdType> = async ({chapterId}) => {
	try {
		const getLessonFetch = await axios.get(
			`${process.env.local}/lesson/chapter/${chapterId}`
		)
		const dataLessonFromChapter = getLessonFetch.data.data
		const formatDate = (dateString: string) => {
			const date = new Date(dateString)
			const day = date.getDate()
			const month = date.getMonth() + 1 // Months are zero-based
			const year = date.getFullYear()
			return `${day}/${month}/${year}`
		}

		const formatViewCount = (viewCount: number) => {
			if (viewCount >= 1000000) {
				return (viewCount / 1000000).toFixed(1) + 'm'
			} else if (viewCount >= 1000) {
				return (viewCount / 1000).toFixed(1) + 'k'
			} else {
				return viewCount.toString()
			}
		}

		return (
			<div className='flex justify-start items-center gap-2 overflow-x-auto py-4 px-2v '>
				{dataLessonFromChapter.map((lesson, index) => (
					<Link
						href='/lesson'
						key={index}
						className='min-w-[320px] w-80 px-4 py-2 rounded-md shadow-md bg-bg300 hover:p-3 duration-300 cursor-pointer'>
						<Image
							src={`${process.env.img}/image/${lesson.img}`}
							width={300}
							height={300}
							alt=''
							className='rounded-md shadow-md '
						/>
						<div className='mt-3'>
							<div>Lesson: {lesson.name}</div>
							<div className='bg-accent200 text-bg300 p-1 rounded-md w-fit '>
								price: {formatViewCount(lesson.price)} EGP
							</div>
							<div className='text-end text-xs text-text200'>
								{' '}
								{formatDate(lesson.date)}
							</div>
						</div>
					</Link>
				))}
			</div>
		)
	} catch (error) {
		console.log(error)
	}
}

export default GetLessonFromChapter
