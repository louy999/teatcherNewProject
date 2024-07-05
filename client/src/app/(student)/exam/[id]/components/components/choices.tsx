import React, {useEffect, useState} from 'react'
interface ChoicesExamProps {
	data: any
	length: number
	url: string
	page: number
}

const ChoicesExam: React.FC<ChoicesExamProps> = ({data, length, url, page}) => {
	const [examData, setExamData] = useState([])
	const [choiceAnswer, setChoiceAnswer] = useState('')

	useEffect(() => {
		if (data && data.choices) {
			setExamData(data.choices)
		}
	}, [data])

	return (
		<>
			<ul className='w-full h-fit text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg'>
				{examData.map((c, i) => (
					<li
						className='w-full border-b border-gray-200 rounded-t-lg'
						key={i}>
						<div className='flex items-center ps-3'>
							<input
								id={`default-radio-${i}`}
								type='radio'
								value={c}
								name={`list-radio-${page}`}
								className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2'
								checked={choiceAnswer === c}
							/>
							<label
								htmlFor={`default-radio-${i}`}
								className='w-full py-3 ms-2 text-sm font-medium text-gray-900'>
								{c}
							</label>
						</div>
					</li>
				))}
			</ul>
		</>
	)
}

export default ChoicesExam
