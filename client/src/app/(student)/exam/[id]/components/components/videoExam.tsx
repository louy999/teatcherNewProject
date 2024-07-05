'use client'
import React, {useEffect, useState} from 'react'
import ReactPlayer from 'react-player'

interface VideoExamProps {
	data: {video: string} // Define the expected type for the data prop
}

const VideoExam: React.FC<VideoExamProps> = ({data}) => {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	return (
		<>
			{data.video !== '' ? (
				<div className='w-11/12 md:6/12 rounded-md h-96 bg-white flex justify-center items-center'>
					{isClient ? (
						<ReactPlayer
							url={data.video}
							width='90%'
							height='100%'
						/>
					) : (
						''
					)}
				</div>
			) : (
				''
			)}
		</>
	)
}

export default VideoExam
