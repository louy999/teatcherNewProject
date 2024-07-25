import StudentInfo from './components/StudentInfo'
import Lesson from './components/lessons'
import Exam from './components/exam'
import axios from 'axios'
import {headers} from 'next/headers'
import ParentInfo from './components/parentInfo'

const ProfilePage = async () => {
	const payload = JSON.parse(headers().get('X-Decoded-Token')).payload

	return (
		<main className='flex  justify-center gap-2 items-center w-full md:w-4/6 lg:w-3/5 flex-wrap '>
			{payload.student_id ? (
				<ParentInfo data={payload} />
			) : (
				<StudentInfo data={payload} />
			)}
			<Lesson />
			{/* <Exam /> */}
		</main>
	)
}

export default ProfilePage
