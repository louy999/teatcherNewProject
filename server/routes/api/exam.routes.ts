import {Router, Request, Response} from 'express'
import jwt, {JwtPayload} from 'jsonwebtoken'
import config from '../../config'
import Exam from '../../types/exam.types'
import ExamModel from '../../models/exam.model'
import {jwtAccessToken, jwtAccessStudent} from '../../middleware/jwtTokenAccess'

const examModel = new ExamModel()
const routes = Router()

// Create exam
routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const exam: Exam = await examModel.createExam(req.body)
		res.json({
			status: 'success',
			data: {...exam},
			message: 'Exam created successfully',
		})
	} catch (err) {
		next(err)
	}
})

// Get all chapters
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const chapters = await examModel.getAllExam()
		return res.json({
			status: 'success',
			data: chapters,
			message: 'Chapters retrieved successfully',
		})
	} catch (err: any) {
		next(err.message)
	}
})

// Get specific exam by ID
routes.get('/:id', async (req: Request, res: Response, next) => {
	try {
		const exam: any = await examModel.getOneExamById(
			req.params.id as unknown as string
		)
		return res.json({
			status: 'success',
			data: exam,
			message: 'Exam retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})

// Get exam by name
routes.get('/lesson/:lesson_id', async (req: Request, res: Response, next) => {
	try {
		const exam: any = await examModel.getOneExamByLessonId(
			req.params.lesson_id as unknown as string
		)
		return res.json({
			status: 'success',
			data: exam,
			message: 'Exam retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})

// Update exam
routes.patch('/:id', async (req: Request, res: Response, next) => {
	try {
		const exam: any = await examModel.updateExam(req.body)
		jwtAccessStudent(req, res, exam, 'Exam updated successfully')
	} catch (err) {
		next(err)
	}
})

// Delete exam
routes.delete('/:id/:name', async (req: Request, res: Response, next) => {
	try {
		const exam: any = await examModel.deleteExam(
			req.params.id as unknown as string,
			req.params.name as unknown as string
		)
		jwtAccessStudent(req, res, exam, 'Exam deleted successfully')
	} catch (err) {
		next(err)
	}
})

export default routes
