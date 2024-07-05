import React from 'react'
import Link from 'next/link'

interface FooterQuizProps {
	page: number
	length: number
	url: string
}

const FooterQuiz: React.FC<FooterQuizProps> = ({page, length, url}) => {
	return (
		<div className='text-2xl w-full flex justify-between py-3 px-5'>
			{page > 0 ? (
				<Link href={`?pa=${Number(page) - 1}`}>BACK</Link>
			) : (
				<div className='text-slate-200 cursor-pointer'>BACK</div>
			)}
			{page < length - 1 ? (
				<Link href={`?pa=${Number(page) + 1}`}>NEXT</Link>
			) : (
				<button>FINISH</button>
			)}
		</div>
	)
}

export default FooterQuiz
