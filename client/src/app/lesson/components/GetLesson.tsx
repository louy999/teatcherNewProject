import axios from 'axios'
import GetVideoLesson from './getVideoLesson'
import ErrorPage from './errorPage'
import GetFileLesson from './GetFileLesson'
import GetExamLesson from './GetExamLesson'

const GetLesson = async ({lessonId}) => {
	try {
		const fetchLessonById = await axios.get(
			`${process.env.local}/lesson/${lessonId}`
		)
		const LessonDate = fetchLessonById.data.data

		return (
			<section className='flex justify-center w-full flex-wrap items-center'>
				<GetVideoLesson videoURL={LessonDate.video} />
				<GetFileLesson fileURL={LessonDate.file} />
				<GetExamLesson />
			</section>
		)
	} catch (error) {
		return <ErrorPage />
	}
}

export default GetLesson
