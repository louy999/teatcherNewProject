import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const data = [
	{
		name: 'chapter1',
		data: [
			{
				id: 1,
				img: '/images.png',
				view: 8,
				title: 'lesson 1',
				price: 20,
				dateCreate: '20/5/2024',
			},
			{
				id: 2,
				img: '/images.png',
				view: 7,
				title: 'lesson 2',
				price: 40,
				dateCreate: '20/7/2024',
			},
			{
				id: 3,
				img: '/images.png',
				view: 122,
				title: 'lesson 3',
				price: 400,
				dateCreate: '10/12/2024',
			},
		],
	},
	{
		name: 'chapter2',
		data: [
			{
				id: 1,
				img: '/images.png',
				view: 8,
				title: 'lesson 1',
				price: 20,
				dateCreate: '20/5/2024',
			},
			{
				id: 2,
				img: '/images.png',
				view: 7,
				title: 'lesson 2',
				price: 40,
				dateCreate: '20/7/2024',
			},
			{
				id: 3,
				img: '/images.png',
				view: 1222,
				title: 'lesson 3',
				price: 400,
				dateCreate: '10/12/2024',
			},
		],
	},
	{
		name: 'chapter2',
		data: [
			{
				id: 1,
				img: '/images.png',
				view: 8,
				title: 'lesson 1',
				price: 20,
				dateCreate: '20/5/2024',
			},
			{
				id: 2,
				img: '/images.png',
				view: 7,
				title: 'lesson 2',
				price: 40,
				dateCreate: '20/7/2024',
			},
			{
				id: 3,
				img: '/images.png',
				view: 1222,
				title: 'lesson 3',
				price: 400,
				dateCreate: '10/12/2024',
			},
		],
	},
	{
		name: 'chapter2',
		data: [
			{
				id: 1,
				img: '/images.png',
				view: 8,
				title: 'lesson 1',
				price: 20,
				dateCreate: '20/5/2024',
			},
			{
				id: 2,
				img: '/images.png',
				view: 7,
				title: 'lesson 2',
				price: 40,
				dateCreate: '20/7/2024',
			},
			{
				id: 3,
				img: '/images.png',
				view: 1222,
				title: 'lesson 3',
				price: 400,
				dateCreate: '10/12/2024',
			},
		],
	},
]
function Lesson() {
	return (
		<div className='bg-bg200  w-full h-80 overflow-y-auto py-5  rounded-md  pl-2 shadow-md'>
			{data.map((chapter, index) => (
				<div
					key={index}
					className='w-11/12  '>
					<div className='text-black text-2xl'>{chapter.name}</div>
					{chapter.data.map((lesson) => (
						<div
							key={lesson.id}
							className='card  rounded-md w-full bg-red-200 cursor-pointer '>
							<Link
								href='/'
								className='name capitalize mb-2 border-b-2 w-full block border-black px-2 py-1 hover:px-4 hover:text-slate-400 duration-300'>
								{lesson.title}
							</Link>
						</div>
					))}
				</div>
			))}
		</div>
	)
}

export default Lesson
