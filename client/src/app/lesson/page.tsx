import React from 'react'
import GetLesson from './components/GetLesson'

const LessonPage = (props) => {
	const lessonId = props.searchParams.id
	return <GetLesson lessonId={lessonId} />
}

export default LessonPage
