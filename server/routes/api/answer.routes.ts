import {Router, Request, Response} from 'express'
import jwt, {JwtPayload} from 'jsonwebtoken'
import config from '../../config'
import Answer from '../../types/answer.types'
import AnswerModel from '../../models/answer.model'

const answerModel = new AnswerModel()
const routes = Router()

// Create answer
routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const answer: Answer = await answerModel.createAnswer(req.body)
		res.json({
			status: 'success',
			data: {...answer},
			message: 'Answer created successfully',
		})
	} catch (err) {
		next(err)
	}
})

// Get all answer
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const answer = await answerModel.getAllAnswer()
		return res.json({
			status: 'success',
			data: answer,
			message: 'answer retrieved successfully',
		})
	} catch (err: any) {
		next(err.message)
	}
})

// Get specific answer by ID
routes.get('/:id', async (req: Request, res: Response, next) => {
	try {
		const answer: any = await answerModel.getOneAnswerById(
			req.params.id as unknown as string
		)
		return res.json({
			status: 'success',
			data: answer,
			message: 'Answer retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})

// Get answer by name
routes.get(
	'/student/:student_id',
	async (req: Request, res: Response, next) => {
		try {
			const answer: any = await answerModel.getOneAnswerByStudentId(
				req.params.student_id as unknown as string
			)
			return res.json({
				status: 'success',
				data: answer,
				message: 'Answer retrieved successfully',
			})
		} catch (err) {
			next(err)
		}
	}
)
// Get answer by name
routes.get('/exam/:exam_id', async (req: Request, res: Response, next) => {
	try {
		const answer: any = await answerModel.getOneAnswerByExamId(
			req.params.exam_id as unknown as string
		)
		return res.json({
			status: 'success',
			data: answer,
			message: 'Answer retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})
// Get answer by name
routes.get(
	'/lesson/:lesson_id/student/:student_id',
	async (req: Request, res: Response, next) => {
		try {
			const answer: any = await answerModel.getOneAnswerByStudentIdAndLessonId(
				req.params.lesson_id as unknown as string,
				req.params.student_id as unknown as string
			)
			return res.json({
				status: 'success',
				data: answer,
				message: 'Answer retrieved successfully',
			})
		} catch (err) {
			next(err)
		}
	}
)

// Update answer
routes.patch('/:id', async (req: Request, res: Response, next) => {
	try {
		const answer: any = await answerModel.updateAnswer(req.body)
		return res.json({
			status: 'success',
			data: answer,
			message: 'Answer retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})

export default routes
