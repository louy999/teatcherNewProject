'use client'
import React, {useEffect, useState} from 'react'
import ReactPlayer from 'react-player'

const VideoSection = ({url}) => {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	return (
		<div className='w-11/12 md:6/12  rounded-md h-96 bg-bg300 shadow-md  flex justify-center items-center'>
			{isClient ? (
				<ReactPlayer
					url={`${url.video}`}
					width='90%'
					hight='100%'
				/>
			) : (
				<div className='px-3 py-1 text-lg font-medium leading-none text-center bg-black text-white rounded-full animate-pulse'>
					loading...
				</div>
			)}
		</div>
	)
}

export default VideoSection
