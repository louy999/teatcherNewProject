import React from 'react'
import axios from 'axios'
import {cookies} from 'next/headers'
import AccessT from './accessT'
import AccessF from './accessF'

const GetAllStudents = async () => {
	const token = cookies().get('accesstoken').value

	const getAccessFalse = await axios.get(
		`${process.env.local}/student/access/false`,
		{
			headers: {accesstoken: token},
		}
	)
	const getAccessTrue = await axios.get(
		`${process.env.local}/student/access/true`,
		{
			headers: {accesstoken: token},
		}
	)
	return (
		<div className='w-[calc(100vw-5rem)] md:w-[calc(100vw-20rem)] flex gap-4'>
			<AccessT data={getAccessTrue.data.data} />

			<AccessF data={getAccessFalse.data.data} />
		</div>
	)
}

export default GetAllStudents
