import {Router, Request, Response} from 'express'
import jwt, {JwtPayload} from 'jsonwebtoken'
import config from '../../config'
import TransType from '../../types/trans.types'
import TransModel from '../../models/trans.model'
const transModel = new TransModel()
const routes = Router()

// Create trans
routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const trans: TransType = await transModel.createTrans(req.body)
		res.json({
			status: 'success',
			data: {...trans},
			message: 'TransType created successfully',
		})
	} catch (err) {
		next(err)
	}
})

// Get all chapters
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const chapters = await transModel.getAllTrans()
		return res.json({
			status: 'success',
			data: chapters,
			message: 'Chapters retrieved successfully',
		})
	} catch (err: any) {
		next(err.message)
	}
})

// Get specific trans by ID
routes.get('/:id', async (req: Request, res: Response, next) => {
	try {
		const trans: any = await transModel.getOneTransById(
			req.params.id as unknown as string
		)
		return res.json({
			status: 'success',
			data: trans,
			message: 'TransType retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})

// Get trans by student_id
routes.get(
	'/student/:student_id',
	async (req: Request, res: Response, next) => {
		try {
			const trans: any = await transModel.getOneTransByStudentId(
				req.params.student_id as unknown as string
			)
			return res.json({
				status: 'success',
				data: trans,
				message: 'TransType retrieved successfully',
			})
		} catch (err) {
			next(err)
		}
	}
)
// Get trans by lesson_id
routes.get('/lesson/:lesson_id', async (req: Request, res: Response, next) => {
	try {
		const trans: any = await transModel.getOneTransByLessonId(
			req.params.lesson_id as unknown as string
		)
		return res.json({
			status: 'success',
			data: trans,
			message: 'TransType retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})
routes.get(
	'/lesson/:lesson_id/student/:student_id',
	async (req: Request, res: Response, next) => {
		try {
			const trans: any = await transModel.getOneTransByLessonIdAndStudentId(
				req.params.lesson_id as unknown as string,
				req.params.student_id as unknown as string
			)
			return res.json({
				status: 'success',
				data: trans,
				message: 'TransType retrieved successfully',
			})
		} catch (err) {
			next(err)
		}
	}
)
// Get trans by lesson_id
routes.get(
	'/chapter/:chapter_name',
	async (req: Request, res: Response, next) => {
		try {
			const trans: any = await transModel.getOneTransByChapterName(
				req.params.chapter_name as unknown as string
			)
			return res.json({
				status: 'success',
				data: trans,
				message: 'TransType retrieved successfully',
			})
		} catch (err) {
			next(err)
		}
	}
)

export default routes
