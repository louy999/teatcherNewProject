'use client'
import React, {useEffect, useState} from 'react'
import VideoExam from './components/videoExam'
import ImageExam from './components/imageExam'
import QuestionExam from './components/question'
import ChoicesExam from './components/choices'
import FooterQuiz from './footerQuiz'

interface ExamData {
	video: string
	image: string
	choices: string[]
	// Add other properties as needed
}

interface BodyQuizProps {
	exam: ExamData
	page: number
	length: number
	url: string
	allData: any // Replace `any` with the actual type if available
}

const BodyQuiz: React.FC<BodyQuizProps> = ({
	exam,
	page,
	length,
	url,
	allData,
}) => {
	const [examData, setExamData] = useState<ExamData>(exam)

	useEffect(() => {
		setExamData(exam)
	}, [exam])

	return (
		<div className='bg-white h-fit w-full rounded-lg flex justify-center flex-wrap '>
			<VideoExam data={examData} />
			<div className='flex flex-wrap md:flex-nowrap gap-2 p-2 h-fit w-full min-w-2/4'>
				<ImageExam
					data={examData}
					page={page}
				/>
				<div className='w-full'>
					<QuestionExam data={examData} />
					<ChoicesExam
						data={examData}
						page={page}
						length={length}
						url={url}
					/>
				</div>
			</div>
			<FooterQuiz
				page={page}
				length={length}
				url={url}
			/>
		</div>
	)
}

export default BodyQuiz
