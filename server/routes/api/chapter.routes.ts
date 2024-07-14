import {Router, Request, Response} from 'express'
import jwt, {JwtPayload} from 'jsonwebtoken'
import config from '../../config'
import Chapter from '../../types/chapter.types'
import ChapterModel from '../../models/chapter.model'
import {jwtAccessToken, jwtAccessStudent} from '../../middleware/jwtTokenAccess'

const chapterModel = new ChapterModel()
const routes = Router()

// Create chapter
routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const chapter: Chapter = await chapterModel.createChapter(req.body)
		res.json({
			status: 'success',
			data: {...chapter},
			message: 'Chapter created successfully',
		})
	} catch (err) {
		next(err)
	}
})

// Get all chapters
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const chapters = await chapterModel.getAllChapter()
		return res.json({
			status: 'success',
			data: chapters,
			message: 'Chapters retrieved successfully',
		})
	} catch (err: any) {
		next(err.message)
	}
})

// Get specific chapter by ID
routes.get('/:id', async (req: Request, res: Response, next) => {
	try {
		const chapter: any = await chapterModel.getOneChapterById(
			req.params.id as unknown as string
		)
		return res.json({
			status: 'success',
			data: chapter,
			message: 'Chapter retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})

// Get chapter by name
routes.get('/name/:name', async (req: Request, res: Response, next) => {
	try {
		const chapter: any = await chapterModel.getOneChapterByName(
			req.params.name as unknown as string
		)
		return res.json({
			status: 'success',
			data: chapter,
			message: 'Chapter retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})

// Update chapter
routes.patch('/:id', async (req: Request, res: Response, next) => {
	try {
		const chapter: any = await chapterModel.updateChapter(req.body)
		jwtAccessStudent(req, res, chapter, 'Chapter updated successfully')
	} catch (err) {
		next(err)
	}
})

// Delete chapter
routes.delete(
	'/:chapter_id/:name',
	async (req: Request, res: Response, next) => {
		try {
			const chapter: any = await chapterModel.deleteChapter(
				req.params.chapter_id as unknown as string,
				req.params.name as unknown as string
			)
			jwtAccessStudent(req, res, chapter, 'Chapter deleted successfully')
		} catch (err) {
			next(err)
		}
	}
)

export default routes
