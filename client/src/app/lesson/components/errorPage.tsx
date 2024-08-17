'use client'
import {useEffect} from 'react'

const ErrorPage = () => {
	useEffect(() => {
		window.location.pathname = '/'
	}, [])
	return null
}

export default ErrorPage
