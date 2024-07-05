import React from 'react'
import Link from 'next/link'
import {FaAngleDoubleDown} from 'react-icons/fa'

const FilesLesson = ({data}) => {
	return (
		<div className='w-11/12 md:6/12 bg-bg300 shadow-md rounded-md p-2 md:py-4 '>
			<div className='title text-5xl'>Files</div>
			{data?.file?.map((file, index) => (
				<Link
					key={index}
					href={`${process.env.img}/file/${file}`}
					className='mt-4 p-2 hover:px-6 duration-300  gap-2 text-accent200 border-b-2 border-b-black w-full flex items-center '>
					Download File
					<FaAngleDoubleDown className='text-2xl' />
				</Link>
			))}
		</div>
	)
}

export default FilesLesson
