'use client'
import Image from 'next/image'
import {useState} from 'react'
import OpenAddStudentCom from './openAddStudentCom'
import {IoMdCloseCircleOutline} from 'react-icons/io'

const ParentCom = ({data}) => {
	console.log(data)

	const [openAddStudent, setOpenAddStudent] = useState(false)
	return (
		<div className='w-full h-fit flex justify-center items-center'>
			<div className='container flex  justify-around h-80 w-full  shadow-md items-center bg-bg200 rounded-md py-4'>
				<div className='info'>
					<div className='name mb-4'>
						<span className='title text-accent200 capitalize'>name:</span>
						<span className='info ml-2'>{data.username}</span>
					</div>
					<div className='phone mb-4'>
						<span className='title text-accent200 capitalize'>phone:</span>
						<span className='info ml-2'>{data.phone}</span>
					</div>
					<div className='year mb-4'>
						<span className='title text-accent200 capitalize'>year:</span>
						<span className='info ml-2'>{data.stage} year</span>
					</div>
					<div className='bg-accent200 text-bg100 text-xs px-1 py-2 rounded-md text-center cursor-pointer'>
						<span
							onClick={() => {
								setOpenAddStudent(true)
							}}>
							Add Student
						</span>
					</div>
				</div>
				<div className='img'>
					<Image
						src={`${process.env.img}/image/${data.imgprofile}`}
						alt='profile img'
						width={200}
						height={200}
						className='rounded-full md:w-50 md:h-50 w-36 h-36 border-4 border-accent200 md:p-2 p-1 bg-cover '
					/>
				</div>
			</div>
			{openAddStudent ? (
				<div className='absolute top-2/4 left-2/4 -translate-x-2/4 bg-bg100 p-2 rounded-md '>
					<div className='border-b-2 border-b-text100 flex justify-between items-center'>
						<span>Add Student Code</span>
						<span>
							<IoMdCloseCircleOutline
								onClick={() => setOpenAddStudent(false)}
								className='w-7 h-7 cursor-pointer text-tub'
							/>
						</span>
					</div>
					<OpenAddStudentCom data={data} />
				</div>
			) : (
				''
			)}
		</div>
	)
}

export default ParentCom
