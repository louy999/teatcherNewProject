import {Router, Request, Response} from 'express'
import jwt, {JwtPayload} from 'jsonwebtoken'
import config from '../../config'
import Parent from '../../types/parent.types'
import ParentModel from '../../models/parent.model'
import {jwtAccessToken, jwtAccessStudent} from '../../middleware/jwtTokenAccess'
const parentModel = new ParentModel()

const routes = Router()
//create parent
routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const parent: Parent = await parentModel.createParent(req.body)
		res.json({
			status: 'success',
			data: {...parent},
			message: 'parent created successfully',
		})
	} catch (err) {
		next(err)
	}
})
//get all parent
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const parent = await parentModel.getAllParents()
		jwtAccessToken(req, res, parent, 'get successfully')
	} catch (err: any) {
		next(err.message)
	}
})
//get specific parent
routes.get('/:id', async (req: Request, res: Response, next) => {
	try {
		const parent: any = await parentModel.getOneParent(
			req.params.id as unknown as string
		)
		jwtAccessToken(req, res, parent, 'get successfully')
	} catch (err) {
		next(err)
	}
})
//get parent by phone
routes.get('/phone/:phone', async (req: Request, res: Response, next) => {
	try {
		const parent: any = await parentModel.getOneFromPhone(
			req.params.phone as unknown as string
		)
		jwtAccessToken(req, res, parent, 'Parent retrieved successfully')
	} catch (err) {
		next(err)
	}
})

// update parent
routes.patch('/:id', async (req: Request, res: Response, next) => {
	try {
		const parent: any = await parentModel.updateParent(req.body)
		jwtAccessStudent(req, res, parent, 'parent updated successfully')
	} catch (err) {
		next(err)
	}
})

routes.delete('/:id', async (req: Request, res: Response, next) => {
	try {
		const parent: any = await parentModel.deleteParent(
			req.params.id as unknown as string
		)
		jwtAccessStudent(req, res, parent, 'parent deleted successfully')
	} catch (err) {
		next(err)
	}
})
routes.post('/auth', async (req: Request, res: Response, next) => {
	try {
		const {phone, password} = req.body
		const parent: Parent | null = await parentModel.auth(phone, password)

		if (!parent) {
			return res.status(401).json({message: 'Authentication failed'})
		}

		const payload = {
			id: parent.id,
			username: parent.username,
			phone: parent.phone,
			password: parent.password,
			imgprofile: parent.imgprofile,
			student_id: parent.student_id,
		}
		const token = jwt.sign({payload}, config.tokenSecret as unknown as string)

		res.json({
			status: 'success',
			data: {...parent, token},
			message: 'parent auth successfully',
		})
	} catch (err) {
		next(err)
	}
})

export default routes
