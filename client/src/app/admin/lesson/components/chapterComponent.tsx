'use client'
import React, {useEffect, useState} from 'react'
import LessonComponent from './lessonComponent'
import {FaEdit} from 'react-icons/fa'

const ChapterComponent = ({data}) => {
	const [dataProps, setDataProps] = useState([])
	useEffect(() => {
		setDataProps(data)
	}, [data])

	return (
		<>
			{dataProps.map((l, a) => (
				<div
					className='p-2 md:px-4 border-2 border-black m-5 rounded-md'
					key={a}>
					<div className='flex items-center gap-6 text-3xl'>
						Chapter: {l.name}
						<FaEdit className='text-xl' />
					</div>
					<div className='lesson'>
						<LessonComponent dataId={l.id} />
					</div>
				</div>
			))}
		</>
	)
}

export default ChapterComponent
