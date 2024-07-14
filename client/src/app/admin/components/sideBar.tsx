import {FaComment} from 'react-icons/fa'
import {IoPeople} from 'react-icons/io5'
import {GrChapterAdd} from 'react-icons/gr'

import Link from 'next/link'
import LinkSideBar from './linkSideBar'
import Image from 'next/image'
import {headers} from 'next/headers'

const SideBar = () => {
	const payload = JSON.parse(headers().get('X-Decoded-Token'))?.payload

	return (
		<div className='w-16 md:w-48 h-[calc(100vh-5rem)] flex items-center'>
			<div className='w-fit h-fit fixed bg-primary100 py-4 px-2 rounded-md shadow-md'>
				<div className='info  items-center gap-2 mb-8 hidden md:flex'>
					<Image
						className='w-10 h-10 rounded-full'
						src='/images.jpeg'
						alt='Rounded avatar'
						width={100}
						height={100}
					/>
					<span className='text-xl'>{payload?.username}</span>
				</div>
				<LinkSideBar
					url={'student'}
					span='students'
					color='blue-400'
					logo={<IoPeople className='text-2xl' />}
				/>
				<LinkSideBar
					url={'lesson'}
					span='chapter&lesson'
					color='green-400'
					logo={<GrChapterAdd className='text-2xl' />}
				/>
				{/* <LinkSideBar
					url={'comment'}
					span='Comments'
					color='red-400'
					logo={<FaComment className='text-2xl' />}
				/> */}
			</div>
		</div>
	)
}

export default SideBar
