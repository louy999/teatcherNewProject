import React from 'react'
interface QuestionExamProps {
	data: any
}
const QuestionExam: React.FC<QuestionExamProps> = ({data}) => {
	return <div>{data?.description}</div>
}

export default QuestionExam
