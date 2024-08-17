'use client'
import ReactPlayer from 'react-player'

const GetVideoLesson = ({videoURL}) => {
	return (
		<div className='w-11/12 bg-bg200 my-3 rounded-md p-4'>
			<ReactPlayer
				url={videoURL}
				width='100%'
				height='50vh'
			/>
		</div>
	)
}

export default GetVideoLesson
