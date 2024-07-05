import jwt, {JwtPayload} from 'jsonwebtoken'
import config from '../config'

interface JwtPayloadWithAccess extends JwtPayload {
	payload: {
		access: string
	}
}

export const jwtAccessToken = (
	req: any,
	res: any,
	student: any[],
	message: string
) => {
	const secretTok = req.headers['accesstoken']

	if (!secretTok) {
		return res.status(401).json({message: 'No token provided'})
	}

	let token: string | JwtPayload

	try {
		token = jwt.verify(
			secretTok as string,
			config.tokenSecret as string
		) as JwtPayloadWithAccess
	} catch (error) {
		return res.status(401).json({message: 'Invalid token'})
	}

	if (typeof token === 'string') {
		return res.status(401).json({message: 'Invalid token'})
	}

	const access: string = token.payload.access

	if (access) {
		return res.json({
			status: 'success',
			data: student,
			message,
		})
	} else {
		return res.status(401).json({message: 'Unauthorized'})
	}
}

export const jwtAccessStudent = (
	req: any,
	res: any,
	student: any[],
	message: string
) => {
	const secretTok = req.headers['accesstoken']

	if (!secretTok) {
		return res.status(401).json({message: 'No token provided'})
	}

	let token: string | JwtPayload

	try {
		token = jwt.verify(
			secretTok as string,
			config.tokenSecret as string
		) as JwtPayloadWithAccess
	} catch (error) {
		return res.status(401).json({message: 'Invalid token'})
	}

	if (typeof token === 'string') {
		return res.status(401).json({message: 'Invalid token'})
	}

	const payload: string = token.payload.id
	const access: string = token.payload.access

	if (payload === req.params.id || access) {
		res.json({
			status: 'success',
			data: student,
			message: 'Student retrieved successfully',
		})
	} else {
		return res.status(401).json({message: 'Unauthorized'})
	}
}
