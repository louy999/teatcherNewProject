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
	const view = axios.patch(`${process.env.local}/lesson/view`, {
		id: params.id,
		name: res.data.data.name,
		img: res.data.data.img,
		price: res.data.data.price,
		video: res.data.data.video,
		file: res.data.data.file,
		chapter_id: res.data.data.chapter_id,
		view: ++res.data.data.view,
	})
	return (
		<section className='w-full flex justify-center  gap-2 md:gap-5  items-center flex-wrap'>
			<VideoSection url={res.data.data} />
			<FilesLesson data={res.data.data} />
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
