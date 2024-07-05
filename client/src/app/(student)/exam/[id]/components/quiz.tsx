'use client'
import {useEffect, useState} from 'react'
import axios from 'axios'
import HeaderQuiz from './headerQuiz'
import BodyQuiz from './bodyQuiz'
import FooterQuiz from './footerQuiz'
import Link from 'next/link'
import {ParsedUrlQuery} from 'querystring'
import {NextRouter, useRouter} from 'next/router'

interface LessonIdParams extends ParsedUrlQuery {
	id: string
}

interface QuizPageProps {
	lessonId: {
		params: LessonIdParams
		searchParams: {
			pa: string
		}
	}
}

const QuizPage: React.FC<QuizPageProps> = ({lessonId}) => {
	const [examData, setExamData] = useState<any[]>([]) // Replace `any[]` with the actual type of `examData`
	const [page, setPage] = useState<number>(0)

	const router: NextRouter = useRouter()

	useEffect(() => {
		const fetchExamData = async () => {
			try {
				const res = await axios.get(
					`${process.env.local}/exam/lesson/${lessonId.params.id}`
				)
				setExamData(res.data.data)
				setPage(Number(lessonId.searchParams.pa))
			} catch (error) {
				console.log(error)
			}
		}
		fetchExamData()
	}, [lessonId])

	if (!examData || examData.length === 0) {
		return (
			<main className='flex justify-center items-center w-full h-screen'>
				<div className='bg-white text-center capitalize text-6xl'>
					<div className='bg-white text-center capitalize text-6xl'>not found</div>
					<Link
						href={`/lesson/${lessonId.params.id}`}
						className='inline-flex text-white text-xl bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4'>
						Back to Homepage
					</Link>
				</div>
			</main>
		)
	}

	return (
		<main className='flex justify-center items-center w-full h-screen'>
			<div className='w-11/12 md:w-8/12 lg:w-6/12 h-fit bg-white rounded-lg'>
				<>
					<HeaderQuiz
						exam={examData}
						page={Number(lessonId.searchParams.pa)}
					/>
					<BodyQuiz
						exam={examData[page]}
						allData={examData}
						page={page}
						length={examData.length}
						url={lessonId.params.id}
					/>
					{/* 
          <FooterQuiz
            page={Number(lessonId.searchParams.pa)}
            length={examData.length}
            url={lessonId.params.id}
          /> 
          */}
				</>
			</div>
		</main>
	)
}

export default QuizPage
