import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'

const ViewsLength = ({lessonId}) => {
	const [views, setViews] = useState(0) // Initialize as an empty array

	useEffect(() => {
		const viewsLesson = async () => {
			try {
				const res = await axios.get(`${process.env.local}/views/lesson/${lessonId}`)
				setViews(res.data.data.length)
			} catch (error) {
				console.log(error)
			}
		}
		viewsLesson()
	}, [lessonId])

	return <div>{views}</div>
}

export default ViewsLength
