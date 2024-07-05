import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'
import verifyJwt from './utils/verifyToken'

const SECRET_KEY = process.env.customKey

// Function for handling requests to /profile
async function handleProfile(request: NextRequest) {
	const token = request.cookies.get('accesstoken')

	if (!token) {
		return NextResponse.redirect(new URL('/login', request.url))
	}

	try {
		const decoded = await verifyJwt(token.value, SECRET_KEY)
		const response = NextResponse.next()
		response.headers.set('x-decoded-token', JSON.stringify(decoded))

		return response
	} catch (error) {
		console.error('Token verification failed:', error)
		return NextResponse.redirect(new URL('/login', request.url))
	}
}

async function handleAdminAccess(request: NextRequest) {
	const url = request.nextUrl.pathname

	const token = request.cookies.get('accesstoken')

	if (!token) {
		return NextResponse.redirect(new URL('/login', request.url))
	}

	try {
		const decoded = await verifyJwt(token.value, SECRET_KEY)

		// Check if decoded token indicates admin access
		if (decoded.payload.access === true) {
			// Proceed if admin access is granted
			const response = NextResponse.next()
			response.headers.set('x-decoded-token', JSON.stringify(decoded))
			return response
		} else {
			// Redirect if admin access is not granted
			return NextResponse.redirect(new URL('/', request.url))
		}
	} catch (error) {
		console.error('Token verification failed:', error)
		return NextResponse.redirect(new URL('/login', request.url))
	}
}

// Function for logging requests to /logout
function logoutRequest(request: NextRequest) {
	const response = NextResponse.next()
	response.cookies.delete('accesstoken')

	return response
}

// Function for handling requests to /lesson/:id
async function LessonRequest(request: NextRequest) {
	const token = request.cookies.get('accesstoken')

	if (!token) {
		return NextResponse.redirect(new URL('/login', request.url))
	}

	try {
		const decoded = await verifyJwt(token.value, SECRET_KEY)
		const response = NextResponse.next()
		response.headers.set('x-decoded-token', JSON.stringify(decoded))

		return response
	} catch (error) {
		console.error('Token verification failed:', error)
		return NextResponse.redirect(new URL('/login', request.url))
	}
}
// Function for handling requests to /lesson/:id
async function ExamRequest(request: NextRequest) {
	const token = request.cookies.get('accesstoken')

	if (!token) {
		return NextResponse.redirect(new URL('/login', request.url))
	}

	try {
		const decoded = await verifyJwt(token.value, SECRET_KEY)
		const response = NextResponse.next()
		response.headers.set('x-decoded-token', JSON.stringify(decoded))

		return response
	} catch (error) {
		console.error('Token verification failed:', error)
		return NextResponse.redirect(new URL('/login', request.url))
	}
}

// Middleware function that routes requests to the appropriate handler
export function middleware(request: NextRequest) {
	const url = request.nextUrl.pathname

	if (url.startsWith('/profile')) {
		return handleProfile(request)
	} else if (url.startsWith('/logout')) {
		return logoutRequest(request)
	} else if (url.startsWith('/admin')) {
		return handleAdminAccess(request)
	} else if (request.nextUrl.pathname.startsWith('/lesson/')) {
		return LessonRequest(request)
	} else if (request.nextUrl.pathname.startsWith('/exam/')) {
		return LessonRequest(request)
	}

	// Allow other requests to proceed without modification
	return NextResponse.next()
}

// Configuration for the middleware matcher
export const config = {
	matcher: [
		'/profile',
		'/logout',
		'/admin/:path*',
		'/lesson/:path*',
		'/exam/:path*',
	],
}
