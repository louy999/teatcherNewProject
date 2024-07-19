'use client'
import React, {useEffect, useState} from 'react'
import {FaAngleDoubleRight} from 'react-icons/fa'

interface ExamData {
	title: string
	// Add other properties if needed
}

interface HeaderQuizProps {
	exam: ExamData[]
	page: number
}

const HeaderQuiz: React.FC<HeaderQuizProps> = ({exam, page}) => {
	const [dataExam, setDataExam] = useState<ExamData[]>([])

	useEffect(() => {
		setDataExam(exam)
	}, [exam])

	return (
		<div className=''>
			<ol className='flex items-center justify-center w-full p-3 space-x-2 mb-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-t-lg shadow-md sm:text-base sm:p-4 sm:space-x-4 rtl:space-x-reverse'>
				{dataExam.map((d, i) => (
					<li
						className={`flex items-center ${
							i === Number(page) ? 'text-blue-600' : ''
						}`}
						key={i}>
						<span className='flex items-center justify-center w-5 h-5 me-1 text-xs border border-blue-600 rounded-full shrink-0 '>
							{++i}
						</span>
						<span className='hidden sm:inline-flex sm:ms-2'>{d.title}</span>
						<FaAngleDoubleRight
							className={`${--i == Number(page) ? 'ml-2' : 'hidden'}`}
						/>
					</li>
				))}
			</ol>
		</div>
	)
}

export default HeaderQuiz
