'use client'
import ReactPlayer from 'react-player'

const VideoSection = ({url}) => {
	return (
		<div className='w-11/12 md:6/12  rounded-md h-96 bg-bg300 shadow-md  flex justify-center items-center'>
			<ReactPlayer
				url={`${url.video}`}
				width='90%'
				hight='100%'
			/>
		</div>
	)
}

export default VideoSection
