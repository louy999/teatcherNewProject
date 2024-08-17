import React from 'react'
import Link from 'next/link'

const GetFileLesson = ({fileURL}) => {
	return (
		<div className='w-11/12 bg-bg200 my-3 rounded-md p-4'>
			{fileURL.map((file, index) => (
				<Link
					key={index}
					target='_black'
					className='border-b-black border-b-2 block w-9/12 pl-3 hover:w-full duration-300 hover:pl-6 text-2xl'
					href={`${process.env.img}/file/${file}`}>
					file
				</Link>
			))}
		</div>
	)
}

export default GetFileLesson
