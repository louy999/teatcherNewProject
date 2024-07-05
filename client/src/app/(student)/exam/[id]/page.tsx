import React from 'react'
import QuizPage from './components/quiz'

interface ExamPageProps {
	lessonId: {
		params: {
			id: string
		}
		searchParams: {
			pa: string
		}
	}
}

const ExamPage: React.FC<ExamPageProps> = ({lessonId}) => {
	return (
		<>
			<QuizPage lessonId={lessonId} />
		</>
	)
}

export default ExamPage
