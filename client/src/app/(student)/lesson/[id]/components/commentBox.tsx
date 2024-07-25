'use client'
import {useState, useEffect} from 'react'
import axios from 'axios'

const CommentBox = ({payload, url}) => {
	const [desc, setDesc] = useState('')

	const handelSubmit = async (e) => {
		e.preventDefault()
		try {
			const res = await axios.post(`${process.env.local}/comment`, {
				description: desc,
				student: payload.id,
				username: payload.username,
				lesson_id: url.id,
			})
			setTimeout(() => {
				window.location.reload()
			}, 100)
		} catch (error) {
			console.log(error)
		}
	}

	const handleKeyDown = (e) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault() // Prevents adding a new line
			handelSubmit(e)
		}
	}

	return (
		<form
			className='w-full md:w-8/12 '
			onSubmit={handelSubmit}>
			<label
				htmlFor='chat'
				className='sr-only'>
				Your message
			</label>
			<div className='flex items-center px-3 py-2 rounded-lg bg-gray-50 '>
				<textarea
					id='chat'
					rows='3'
					onChange={(e) => setDesc(e.target.value)}
					value={desc}
					onKeyDown={handleKeyDown}
					className='block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
					placeholder='Your message...'></textarea>
				<button
					type='submit'
					className='inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100'>
					<svg
						className='w-5 h-5 rotate-90 rtl:-rotate-90'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 18 20'>
						<path d='m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z' />
					</svg>
					<span className='sr-only'>Send message</span>
				</button>
			</div>
		</form>
	)
}

export default CommentBox
