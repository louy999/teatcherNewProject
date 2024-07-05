import db from '../database/index'
import config from '../config'
import Exam from '../types/exam.types'

export default class ExamModel {
	//create exam
	async createExam(u: Exam): Promise<Exam> {
		try {
			const connect = await db.connect()
			const sql = `INSERT INTO exam (title, lesson_id, description, image, video, choices, answer, done) values ($1, $2, $3, $4, $5, $6, $7, $8) returning *`
			const res = await connect.query(sql, [
				u.title,
				u.lesson_id,
				u.description,
				u.image,
				u.video,
				u.choices,
				u.answer,
				u.done === '' ? false : u.done,
			])
			connect.release()
			return res.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}

	//get all exams
	async getAllExam(): Promise<Exam[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from exam'
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
	//get specific exam by id
	async getOneExamById(id: string): Promise<Exam> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from exam WHERE id=($1)'
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

	//get specific exam by name
	async getOneExamByLessonId(lesson_id: string): Promise<Exam[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from exam WHERE lesson_id=($1)'
			//run query
			const result = await connect.query(sql, [lesson_id])
			//release connect
			connect.release()
			//return created student
			return result.rows
		} catch (err) {
			throw new Error(`id:${lesson_id}, ${err}`)
		}
	}
	//update exam
	async updateExam(u: Exam): Promise<Exam> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql =
				'UPDATE exam SET title=$1, lesson_id=$2, description=$3, image=$4, video=$5, choices=$6, answer=$7, done=$8 WHERE id=($9) RETURNING *'
			//run query
			const result = await connect.query(sql, [
				u.title,
				u.lesson_id,
				u.description,
				u.image,
				u.video,
				u.choices,
				u.answer,
				u.done,
				u.id,
			])
			//release connect
			connect.release()
			//return created student
			return result.rows[0]
		} catch (err) {
			throw new Error(`id:${u.id}, ${err}`)
		}
	}
	//delete exam
	async deleteExam(exam_id: string, id: string): Promise<Exam> {
		try {
			const connect = await db.connect()
			const deleteLesson = `DELETE from degree WHERE exam_id=($1) RETURNING *`
			const result = await connect.query(deleteLesson, [exam_id])
			const sql = `DELETE from exam WHERE id=($1) RETURNING *`
			const res = await connect.query(sql, [id])
			connect.release()
			//return created user
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
}
