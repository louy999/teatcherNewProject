'use client'
import {getCookie} from 'cookies-next'

import SimpleAuth from './SimpleAuth'
import IfLogin from './IfLogin'

const AuthNav = () => {
	const cookies = getCookie('accesstoken')

	return <div>{cookies === undefined ? <SimpleAuth /> : <IfLogin />}</div>
}

export default AuthNav
