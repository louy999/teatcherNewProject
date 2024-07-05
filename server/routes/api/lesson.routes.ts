import {Router, Request, Response} from 'express'
import jwt, {JwtPayload} from 'jsonwebtoken'
import config from '../../config'
import Lesson from '../../types/lesson.types'
import LessonModel from '../../models/lesson.model'
import {jwtAccessToken, jwtAccessStudent} from '../../middleware/jwtTokenAccess'

const lessonModel = new LessonModel()
const routes = Router()

// Create lesson
routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const lesson: Lesson = await lessonModel.createLesson(req.body)
		res.json({
			status: 'success',
			data: {...lesson},
			message: 'lesson created successfully',
		})
	} catch (err) {
		next(err)
	}
})

// Get all lesson
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const lesson = await lessonModel.getAllLesson()
		res.json({
			status: 'success',
			data: lesson,
			message: 'lessons retrieved successfully',
		})
	} catch (err: any) {
		next(err.message)
	}
})

// Get specific lesson by ID
routes.get('/:id', async (req: Request, res: Response, next) => {
	try {
		const lesson: any = await lessonModel.getOneLessonById(
			req.params.id as unknown as string
		)
		res.json({
			status: 'success',
			data: {...lesson},
			message: 'lessons retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})

// Get lesson by name
routes.get('/chapter/:id', async (req: Request, res: Response, next) => {
	try {
		const lesson: any = await lessonModel.getOneLessonByChapterID(
			req.params.id as unknown as string
		)
		res.json({
			status: 'success',
			data: lesson,
			message: 'lessons retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})

// Update lesson
routes.patch('/:id', async (req: Request, res: Response, next) => {
	try {
		const lesson: any = await lessonModel.updateLesson(req.body)
		res.json({
			status: 'success',
			data: lesson,
			message: 'lessons retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})
// Update lesson view

// Delete lesson
routes.delete('/:id/', async (req: Request, res: Response, next) => {
	try {
		const lesson: any = await lessonModel.deleteLesson(
			req.params.id as unknown as string
		)
		jwtAccessStudent(req, res, lesson, 'lesson deleted successfully')
	} catch (err) {
		next(err)
	}
})

export default routes
