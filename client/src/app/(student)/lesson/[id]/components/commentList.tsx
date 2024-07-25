'use client'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
import ReplayBox from './replayBox'

const CommentListLesson = ({url}) => {
	const [commentData, setCommentData] = useState([])
	const [name, setName] = useState([])

	useEffect(() => {
		const resComment = async () => {
			try {
				const res = await axios.get(`${process.env.local}/comment/lesson/${url.id}`)
				setCommentData(res.data.data)
			} catch (error) {
				return toast.error('Error Notification !', {
					position: 'top-left',
				})
			}
		}
		resComment()
	}, [url.id]) // Include url.id in the dependency array

	const formatDate = (dateString) => {
		const date = new Date(dateString)
		const day = date.getDate()
		const month = date.getMonth() + 1 // Months are zero-based
		const year = date.getFullYear()
		return `${day}/${month}/${year}`
	}

	const sortedCommentData = commentData.sort(
		(a, b) => new Date(b.date) - new Date(a.date)
	)

	return (
		<>
			{sortedCommentData?.map((c, i) => (
				<article
					className='w-11/12 md:6/12 p-2 md:py-4 rounded-md  bg-bg300 shadow-md'
					key={i}>
					<div className='flex items-center mb-2'>
						<div className='font-medium '>
							<p className='text-text200'>
								{c?.username}
								<span className='block text-sm text-gray-500 '>
									{formatDate(c.date)}
								</span>
							</p>
						</div>
					</div>

					<p className='mb-2 bg-primary100 text-text100 py-1 px-2 rounded-md'>
						{c.description}
					</p>
					<footer className='mb-5 flex flex-wrap justify-end text-md text-gray-500 '>
						<ReplayBox url={c} />
					</footer>
				</article>
			))}
		</>
	)
}

export default CommentListLesson
