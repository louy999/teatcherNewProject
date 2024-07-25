import {cookies} from 'next/headers'

import LoginReg from './loginReg'
import AuthProfile from './authProfile'

const AuthPage = () => {
	const cookieStore = cookies()
	const login = cookieStore.get('accesstoken')

	return (
		<div className='flex items-center gap-3 capitalize'>
			{login === undefined ? <LoginReg /> : <AuthProfile />}
		</div>
	)
}

export default AuthPage
