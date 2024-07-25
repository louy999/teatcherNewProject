'use client'
import InfoStudentFromParent from './infoStudentFromParent'
import {getCookie} from 'cookies-next'

import LinksPhoneStudent from './linksPhoneStudent'
import {useRouter, useSearchParams} from 'next/navigation'
import Image from 'next/image'
import ParentCom from './parentCom'

const ParentInfo = ({data}) => {
	const searchParams = useSearchParams()

	return (
		<div className='flex  relative gap-2 w-full  flex-wrap md:flex-nowrap'>
			<div className='flex flex-wrap md:flex-nowrap md:flex-col gap-2 '>
				{data.student_id.map((i, a) => (
					<LinksPhoneStudent
						key={a}
						id={i}
						token={getCookie('accesstoken')}
					/>
				))}
			</div>
			{data.student_id.map((i, a) => (
				<InfoStudentFromParent
					key={a}
					id={i}
					token={getCookie('accesstoken')}
				/>
			))}

			{searchParams.get('stu') == null ? <ParentCom data={data} /> : ''}
		</div>
	)
}

export default ParentInfo
