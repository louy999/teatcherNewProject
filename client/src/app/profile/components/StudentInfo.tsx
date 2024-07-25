'use client'
import Image from 'next/image'
import Link from 'next/link'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {toast} from 'react-toastify'

function StudentInfo({data}) {
	return (
		<section className='w-full h-fit flex justify-center items-center '>
			<div className='container flex  justify-around h-80 w-full  shadow-md items-center bg-bg200 rounded-md py-4'>
				<div className='info'>
					<div className='name mb-4'>
						<span className='title text-accent200  capitalize'>name:</span>
						<span className='info ml-2 text-text100'>{data.username}</span>
					</div>
					<div className='phone mb-4'>
						<span className='title text-accent200  capitalize'>phone:</span>
						<span className='info ml-2 text-text100'>{data.phone}</span>
					</div>
					<div className='year mb-4'>
						<span className='title text-accent200  capitalize'>year:</span>
						<span className='info ml-2 text-text100'>{data.stage} year</span>
					</div>
					<div className='mb-3'>
						{data.access ? (
							<Link
								href='/admin'
								className='bg-accent200 text-bg100 py-2 px-1 rounded-md hover:p-3 duration-300  active:p-1 '>
								Admin
							</Link>
						) : (
							<></>
						)}
					</div>
					<div>
						<CopyToClipboard
							onClick={() => {
								toast.success('Success Notification !', {
									position: 'top-center',
								})
							}}
							text={data.id}
							className='bg-accent200 text-bg100 py-2 px-1 rounded-md hover:p-3 duration-300 text-xs active:p-1'>
							<button>Copy Code</button>
						</CopyToClipboard>
					</div>
				</div>
				<div className='img'>
					<Image
						src={`${process.env.img}/image/${data.imgprofile}`}
						alt='profile img'
						width={200}
						height={200}
						className='rounded-full md:w-50 md:h-50 w-36 h-36 border-4 border-accent200 md:p-2 p-1 bg-cover '
					/>
				</div>
			</div>
		</section>
	)
}

export default StudentInfo
