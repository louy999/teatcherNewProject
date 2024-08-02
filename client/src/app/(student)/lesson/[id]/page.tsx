import VideoSection from './components/videoSection'
import FilesLesson from './components/files'
import ExamLesson from './components/exam'
import CommentListLesson from './components/commentList'
import CommentBox from './components/commentBox'
import axios from 'axios'
import {headers} from 'next/headers'
interface lessonIdProps {
	params: {
		id: string
	}
}
const LessonId: React.FC<lessonIdProps> = async ({params}) => {
	const payload = JSON.parse(headers().get('X-Decoded-Token')).payload
	const res = await axios.get(`${process.env.local}/lesson/${params.id}`)
	if (!payload.student_id) {
		const ifView = await axios.get(
			`${process.env.local}/views/student/${payload.id}`
		)
		if (ifView?.data?.data?.lesson_id !== params.id) {
			const view = axios.post(`${process.env.local}/views`, {
				student_id: payload.id,
				lesson_id: params.id,
			})
		}
	}

	return (
		<section className='w-full flex justify-center  gap-2 md:gap-5  items-center flex-wrap'>
			<VideoSection url={res?.data.data} />
			<FilesLesson data={res?.data.data} />
			<ExamLesson url={params} />
			<CommentListLesson url={params} />
			<CommentBox
				payload={payload}
				url={params}
			/>
		</section>
	)
}

export default LessonId
