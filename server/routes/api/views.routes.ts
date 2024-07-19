import {Router, Request, Response} from 'express'
import jwt, {JwtPayload} from 'jsonwebtoken'
import config from '../../config'
import ViewsType from '../../types/views.types'
import ViewsModel from '../../models/views.model'
const viewsModel = new ViewsModel()
const routes = Router()

// Create view
routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const view: ViewsType = await viewsModel.createView(req.body)
		res.json({
			status: 'success',
			data: {...view},
			message: 'ViewsType created successfully',
		})
	} catch (err) {
		next(err)
	}
})

// Get all chapters
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const chapters = await viewsModel.getAllView()
		return res.json({
			status: 'success',
			data: chapters,
			message: 'Chapters retrieved successfully',
		})
	} catch (err: any) {
		next(err.message)
	}
})

// Get specific view by ID
routes.get('/:id', async (req: Request, res: Response, next) => {
	try {
		const view: any = await viewsModel.getOneViewById(
			req.params.id as unknown as string
		)
		return res.json({
			status: 'success',
			data: view,
			message: 'ViewsType retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})

// Get view by student_id
routes.get(
	'/student/:student_id',
	async (req: Request, res: Response, next) => {
		try {
			const view: any = await viewsModel.getOneViewByStudentName(
				req.params.student_id as unknown as string
			)
			return res.json({
				status: 'success',
				data: view,
				message: 'ViewsType retrieved successfully',
			})
		} catch (err) {
			next(err)
		}
	}
)
// Get view by lesson_id
routes.get('/lesson/:lesson_id', async (req: Request, res: Response, next) => {
	try {
		const view: any = await viewsModel.getOneViewByLessonId(
			req.params.lesson_id as unknown as string
		)
		return res.json({
			status: 'success',
			data: view,
			message: 'ViewsType retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})

export default routes
