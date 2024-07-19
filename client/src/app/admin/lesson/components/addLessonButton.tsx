import {IoMdAddCircle} from 'react-icons/io'
import {IoMdCloseCircle} from 'react-icons/io'
import {useState, useEffect} from 'react'
import axios from 'axios'

const AddLessonButton = ({dataName}) => {
	const [openModal, setOpenModal] = useState(false)
	const [addChapter, setAddChapter] = useState(false)
	const [chapterName, setChapterName] = useState('')
	const AddChapterFetch = async () => {
		if (chapterName === '')
			return toast.error('add name chapter !', {
				position: 'top-left',
			})
		try {
			const res = await axios.post(`${process.env.local}/chapter`, {
				name: chapterName,
			})
			window.location.reload()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className=''>
			<IoMdAddCircle
				className='text-5xl cursor-pointer'
				onClick={() => setOpenModal((prev) => !prev)}
			/>
			{openModal ? (
				<div
					className={`modal absolute -top-16 left-0 h-screen w-screen z-[2345678889] flex justify-center items-center bg-black bg-opacity-80`}>
					<div className='bg-back rounded-md w-11/12 md:w-10/12 h-[80vh] px-2 '>
						<div className='header w-full flex justify-between items-center text-4xl p-4 border-b-2 border-black'>
							<div className='text-2xl'>Add Lesson and Chapter</div>
							<IoMdCloseCircle
								className='cursor-pointer'
								onClick={() => setOpenModal(false)}
							/>
						</div>
						<div className='body'>
							<div className='chapter flex items-center gap-3 mt-5 w-full '>
								<div className='w-full'>
									<select
										id='countries'
										class='block w-full flex-1 p-2 outline-none'>
										<option selected>Choose a chapter</option>
										{dataName.map((n, a) => (
											<option
												value={n.id}
												key={a}>
												chapter: {n.name}
											</option>
										))}
									</select>
								</div>
								<input
									type='button'
									value='Add'
									className='w-1/12 cursor-pointer'
									onClick={() => setAddChapter(true)}
								/>
								{addChapter ? (
									<div className='absolute top-2/4 left-2/4 -translate-x-[50%] rounded-md bg-bg300 p-2'>
										<div className='border-b-2 border-black mb-2 p-2 flex justify-between items-center'>
											<div>add Chapter</div>
											<IoMdCloseCircle
												className='text-2xl cursor-pointer'
												onClick={() => setAddChapter(false)}
											/>
										</div>
										<div>
											<span>chapter name: </span>
											<input
												type='text'
												name=''
												id=''
												value={chapterName}
												onChange={(e) => setChapterName(e.target.value)}
											/>
										</div>
										<div
											className='w-full bg-back rounded-md text-center mt-3 '
											onClick={AddChapterFetch}>
											Done
										</div>
									</div>
								) : (
									''
								)}
							</div>
							<div className='lesson'>
								<div>
									<input
										type='text'
										name=''
										id=''
									/>
								</div>
								<div className='video'>
									<input
										type='url'
										name='video link'
										id='video link'
										placeholder='enter video link'
										className='border-2 border-black w-10/12 p-2 m-2'
									/>
								</div>
								<div>
									<input
										type='file'
										name='image'
										id=''
										placeholder='image'
									/>
								</div>
								<div>
									<input
										type='number'
										name=''
										id=''
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				''
			)}
		</div>
	)
}

export default AddLessonButton
