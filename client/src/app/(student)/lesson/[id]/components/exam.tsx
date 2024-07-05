import React from 'react'
import Link from 'next/link'
import {MdQuiz} from 'react-icons/md'

const ExamLesson = ({url}) => {
	return (
		<div className='w-11/12 md:6/12 bg-bg300 shadow-md rounded-md p-2 md:py-4 '>
			<div className='title text-5xl'>Exams</div>
			<Link
				href={`/exam/${url.id}?pa=0`}
				className='mt-4 p-2 hover:px-6 duration-300  text-accent200 border-b-2 border-b-black w-full flex items-center gap-2  '>
				Exam
				<MdQuiz className='text-2xl' />
			</Link>
		</div>
	)
}

export default ExamLesson
