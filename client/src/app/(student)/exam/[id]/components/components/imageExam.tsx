'use client'
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import {IoClose} from 'react-icons/io5'

interface ImageExamProps {
	data: {image: string} // Replace with the actual type if available
	page: number
}

const ImageExam: React.FC<ImageExamProps> = ({data, page}) => {
	const [openGallery, setOpenGallery] = useState(false)

	return (
		<>
			{data.image !== '' ? (
				<Image
					src={`${process.env.img}/image/${data.image}`}
					alt=''
					className='rounded-md'
					onClick={() => setOpenGallery((prev) => !prev)}
					width={500}
					height={550}
				/>
			) : (
				''
			)}
			{!openGallery ? (
				''
			) : (
				<div className='z-50 w-[80vw]  h-[80vh] md:h-[50vw] absolute top-[10%] left-2/4 translate-x-[-50%] bg-white'>
					<div className='w-full px-4 flex justify-end items-end border-b-2 border-b-black mb-5'>
						<IoClose
							className='text-3xl cursor-pointer'
							onClick={() => setOpenGallery((prev) => !prev)}
						/>
					</div>
					<div className='w-full flex justify-center items-center'>
						<Image
							src={`${process.env.img}/image/${data.image}`}
							alt=''
							className='w-10/12 h-full'
							onClick={() => setOpenGallery((prev) => !prev)}
							width={1000}
							height={1000}
						/>
					</div>
				</div>
			)}
		</>
	)
}

export default ImageExam
