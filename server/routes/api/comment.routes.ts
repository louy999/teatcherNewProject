import {Router, Request, Response} from 'express'
import jwt, {JwtPayload} from 'jsonwebtoken'
import config from '../../config'
import Comment from '../../types/comment.types'
import CommentModel from '../../models/comments.model'
import {jwtAccessToken, jwtAccessStudent} from '../../middleware/jwtTokenAccess'

const commentModel = new CommentModel()
const routes = Router()

// Create comments
routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const comments: Comment = await commentModel.createComment(req.body)
		res.json({
			status: 'success',
			data: {...comments},
			message: 'Comment created successfully',
		})
	} catch (err) {
		next(err)
	}
})

// Get all chapters
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const chapters = await commentModel.getAllComment()
		return res.json({
			status: 'success',
			data: chapters,
			message: 'Chapters retrieved successfully',
		})
	} catch (err: any) {
		next(err.message)
	}
})

// Get specific comments by ID
routes.get('/:id', async (req: Request, res: Response, next) => {
	try {
		const comments: any = await commentModel.getOneCommentById(
			req.params.id as unknown as string
		)
		return res.json({
			status: 'success',
			data: comments,
			message: 'Comment retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})

// Get comments by name
routes.get('/lesson/:lesson_id', async (req: Request, res: Response, next) => {
	try {
		const comments: any = await commentModel.getOneCommentByLessonId(
			req.params.lesson_id as unknown as string
		)
		return res.json({
			status: 'success',
			data: comments,
			message: 'Comment retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})

// Update comments
routes.patch('/:id', async (req: Request, res: Response, next) => {
	try {
		const comments: any = await commentModel.updateComment(req.body)
		jwtAccessStudent(req, res, comments, 'Comment updated successfully')
	} catch (err) {
		next(err)
	}
})

// Delete comments
routes.delete('/:id', async (req: Request, res: Response, next) => {
	try {
		const comments: any = await commentModel.deleteComment(
			req.params.id as unknown as string
		)
		jwtAccessStudent(req, res, comments, 'Comment deleted successfully')
	} catch (err) {
		next(err)
	}
})

export default routes
