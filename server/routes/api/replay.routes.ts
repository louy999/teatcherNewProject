import {Router, Request, Response} from 'express'
import jwt, {JwtPayload} from 'jsonwebtoken'
import config from '../../config'
import Replay from '../../types/replay.types'
import ReplayModel from '../../models/replay.model'
import {jwtAccessToken, jwtAccessStudent} from '../../middleware/jwtTokenAccess'

const commentModel = new ReplayModel()
const routes = Router()

// Create replay
routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const replay: Replay = await commentModel.createReplay(req.body)
		res.json({
			status: 'success',
			data: {...replay},
			message: 'Replay created successfully',
		})
	} catch (err) {
		next(err)
	}
})

// Get all chapters
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const chapters = await commentModel.getAllReplay()
		return res.json({
			status: 'success',
			data: chapters,
			message: 'Chapters retrieved successfully',
		})
	} catch (err: any) {
		next(err.message)
	}
})

// Get specific replay by ID
routes.get('/:id', async (req: Request, res: Response, next) => {
	try {
		const replay: any = await commentModel.getOneReplayById(
			req.params.id as unknown as string
		)
		return res.json({
			status: 'success',
			data: replay,
			message: 'Replay retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})

// Get replay by name
routes.get(
	'/comment/:comment_id',
	async (req: Request, res: Response, next) => {
		try {
			const replay: any = await commentModel.getOneReplayByCommentId(
				req.params.comment_id as unknown as string
			)
			return res.json({
				status: 'success',
				data: replay,
				message: 'Replay retrieved successfully',
			})
		} catch (err) {
			next(err)
		}
	}
)

// Update replay
routes.patch('/:id', async (req: Request, res: Response, next) => {
	try {
		const replay: any = await commentModel.updateReplay(req.body)
		jwtAccessStudent(req, res, replay, 'Replay updated successfully')
	} catch (err) {
		next(err)
	}
})

// Delete replay
routes.delete('/:id', async (req: Request, res: Response, next) => {
	try {
		const replay: any = await commentModel.deleteReplay(
			req.params.id as unknown as string
		)
		jwtAccessStudent(req, res, replay, 'Replay deleted successfully')
	} catch (err) {
		next(err)
	}
})

export default routes
