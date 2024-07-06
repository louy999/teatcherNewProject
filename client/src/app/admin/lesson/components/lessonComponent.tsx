import axios from 'axios'
import {GrView} from 'react-icons/gr'
import {useEffect, useState} from 'react'

const LessonComponent = ({dataId}) => {
	const [dataFetch, setDataFetch] = useState([])
	useEffect(() => {
		const dataLessonFetch = async () => {
			try {
				const res = await axios.get(`${process.env.local}/lesson/chapter/${dataId}`)
				setDataFetch(res.data.data)
			} catch (error) {
				console.log(error)
			}
		}
		dataLessonFetch()
	}, [dataId])
	console.log(dataFetch)

	return (
		<>
			{dataFetch?.map((l, a) => (
				<div
					key={a}
					className='flex gap-5 items-center'>
					<div>Lesson :{l.name}</div>
					<div className='flex gap-2 items-center'>
						<GrView />
						{l.view}
					</div>
				</div>
			))}
		</>
	)
}

export default LessonComponent
