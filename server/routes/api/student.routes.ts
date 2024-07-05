import {Router, Request, Response} from 'express'
import jwt, {JwtPayload} from 'jsonwebtoken'
import config from '../../config'
import Student from '../../types/student.types'
import StudentModel from '../../models/student.model'
import {jwtAccessToken, jwtAccessStudent} from '../../middleware/jwtTokenAccess'
const studentModel = new StudentModel()

const routes = Router()
//create student
routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const student: Student = await studentModel.createStudent(req.body)
		res.json({
			status: 'success',
			data: {...student},
			message: 'student created successfully',
		})
	} catch (err) {
		next(err)
	}
})

//get all student
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const students = await studentModel.getAllStudents()
		jwtAccessToken(req, res, students, 'Student retrieved successfully')
	} catch (err: any) {
		next(err.message)
	}
})
//get specific student
routes.get('/:id', async (req: Request, res: Response, next) => {
	try {
		const student: any = await studentModel.getOneStudent(
			req.params.id as unknown as string
		)
		jwtAccessToken(req, res, student, 'get successfully')
	} catch (err) {
		next(err)
	}
})
//get student by phone
routes.get('/phone/:phone', async (req: Request, res: Response, next) => {
	try {
		const student: any = await studentModel.getOneFromPhone(
			req.params.phone as unknown as string
		)
		jwtAccessToken(req, res, student, 'Student retrieved successfully')
	} catch (err) {
		next(err)
	}
})
routes.get('/access/:access', async (req: Request, res: Response, next) => {
	try {
		const student: any = await studentModel.getOneFromAccess(
			req.params.access as unknown as string
		)
		jwtAccessToken(req, res, student, 'Student retrieved successfully')
	} catch (err) {
		next(err)
	}
})
// update student
routes.patch('/:id', async (req: Request, res: Response, next) => {
	try {
		const student: any = await studentModel.updateStudent(req.body)
		jwtAccessStudent(req, res, student, 'student updated successfully')
	} catch (err) {
		next(err)
	}
})
//update imgprofile
routes.patch('/img', async (req: Request, res: Response, next) => {
	try {
		const student: any = await studentModel.updateImgStudent(req.body)
		jwtAccessStudent(req, res, student, 'student updated successfully')
	} catch (err) {
		next(err)
	}
})
//update password
routes.patch('/pass', async (req: Request, res: Response, next) => {
	try {
		const student: any = await studentModel.updatePass(req.body)
		jwtAccessStudent(req, res, student, 'student updated successfully')
	} catch (err) {
		next(err)
	}
})
//update access
routes.patch('/access/:id', async (req: Request, res: Response, next) => {
	try {
		const student: any = await studentModel.updateAccessStudent(req.body)
		jwtAccessToken(req, res, student, 'student access updated successfully')
	} catch (err) {
		next(err)
	}
})

routes.delete('/:id', async (req: Request, res: Response, next) => {
	try {
		const student: any = await studentModel.deleteStudent(
			req.params.id as unknown as string
		)
		jwtAccessStudent(req, res, student, 'student deleted successfully')
	} catch (err) {
		next(err)
	}
})
routes.post('/auth', async (req: Request, res: Response, next) => {
	try {
		const {phone, password} = req.body
		const student: Student | null = await studentModel.auth(phone, password)

		if (!student) {
			return res.status(401).json({message: 'Authentication failed'})
		}

		const payload = {
			id: student.id,
			username: student.username,
			phone: student.phone,
			stage: student.stage,
			access: student.access,
			imgprofile: student.imgprofile,
		}
		const token = jwt.sign({payload}, config.tokenSecret as unknown as string)

		res.json({
			status: 'success',
			data: {...student, token},
			message: 'student auth successfully',
		})
	} catch (err) {
		next(err)
	}
})

export default routes
