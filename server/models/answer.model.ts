import db from '../database/index'
import config from '../config'
import Answer from '../types/answer.types'

export default class AnswerModel {
	//create answer
	async createAnswer(u: Answer): Promise<Answer> {
		try {
			const connect = await db.connect()
			const sql = `INSERT INTO answer (student_id, exam_id, choices, lesson_id) values ($1, $2, $3, $4) returning *`
			const res = await connect.query(sql, [
				u.student_id,
				u.exam_id,
				u.choices,
				u.lesson_id,
			])
			connect.release()
			return res.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}

	//get all exams
	async getAllAnswer(): Promise<Answer[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from answer'
			//run query
			const result = await connect.query(sql)
			//release connect
			connect.release()
			//return All students
			return result.rows
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	//get specific answer by id
	async getOneAnswerById(id: string): Promise<Answer> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from answer WHERE id=($1)'
			//run query
			const result = await connect.query(sql, [id])
			//release connect
			connect.release()
			//return created student
			return result.rows[0]
		} catch (err) {
			throw new Error(`id:${id}, ${err}`)
		}
	}

	//get specific answer by name
	async getOneAnswerByStudentId(student_id: string): Promise<Answer[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from answer WHERE student_id=($1)'
			//run query
			const result = await connect.query(sql, [student_id])
			//release connect
			connect.release()
			//return created student
			return result.rows
		} catch (err) {
			throw new Error(`student_id:${student_id}, ${err}`)
		}
	}
	async getOneAnswerByExamId(exam_id: string): Promise<Answer[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from answer WHERE exam_id=($1)'
			//run query
			const result = await connect.query(sql, [exam_id])
			//release connect
			connect.release()
			//return created student
			return result.rows
		} catch (err) {
			throw new Error(`exam_id:${exam_id}, ${err}`)
		}
	}
	async getOneAnswerByStudentIdAndLessonId(
		lesson_id: string,
		student_id: string
	): Promise<Answer[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * FROM answer WHERE lesson_id = $1 AND student_id = $2'
			//run query
			const result = await connect.query(sql, [lesson_id, student_id])
			//release connect
			connect.release()
			//return created student
			return result.rows
		} catch (err) {
			throw new Error(`lesson_id:${lesson_id}, ${err}`)
		}
	}
	//update answer
	async updateAnswer(u: Answer): Promise<Answer> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'UPDATE answer SET choices=$1 WHERE id=($2) RETURNING *'
			//run query
			const result = await connect.query(sql, [u.choices, u.id])
			//release connect
			connect.release()
			//return created student
			return result.rows[0]
		} catch (err) {
			throw new Error(`id:${u.id}, ${err}`)
		}
	}
}
