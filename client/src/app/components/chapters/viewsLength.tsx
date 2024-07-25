import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {GrView} from 'react-icons/gr'

const ViewsLength = ({lessonId}) => {
	const [views, setViews] = useState(0) // Initialize as an empty array
	const formatViewCount = (viewCount) => {
		if (viewCount >= 1000000) {
			return (viewCount / 1000000).toFixed(1) + 'm'
		} else if (viewCount >= 1000) {
			return (viewCount / 1000).toFixed(1) + 'k'
		} else {
			return viewCount.toString()
		}
	}
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

	return (
		<span className='absolute right-0 text-bg100 bg-text200 rounded-md w-fit px-1 h-10 opacity-70 flex justify-center items-center gap-1'>
			<GrView />
			<span>{formatViewCount(views)}</span>
		</span>
	)
}

export default ViewsLength
