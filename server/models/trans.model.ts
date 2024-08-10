import db from '../database/index'
import config from '../config'
import TransType from '../types/trans.types'

export default class TransModel {
	//create trans
	async createTrans(u: TransType): Promise<TransType> {
		try {
			const connect = await db.connect()
			const sql = `INSERT INTO trans (student_id, lesson_id, chapter_name, price) values ($1, $2, $3, $4) returning *`
			const res = await connect.query(sql, [
				u.student_id,
				u.lesson_id,
				u.chapter_name,
				u.price,
			])
			connect.release()
			return res.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}

	//get all Trans
	async getAllTrans(): Promise<TransType[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from trans'
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
	//get specific trans by id
	async getOneTransById(id: string): Promise<TransType> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from trans WHERE id=($1)'
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

	//get specific trans by name
	async getOneTransByStudentId(id: string): Promise<TransType[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from trans WHERE student_id=($1)'
			//run query
			const result = await connect.query(sql, [id])
			//release connect
			connect.release()
			//return created student
			return result.rows
		} catch (err) {
			throw new Error(`id:${id}, ${err}`)
		}
	}
	//get specific trans by name
	async getOneTransByLessonId(id: string): Promise<TransType[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from trans WHERE lesson_id=($1)'
			//run query
			const result = await connect.query(sql, [id])
			//release connect
			connect.release()
			//return created student
			return result.rows
		} catch (err) {
			throw new Error(`id:${id}, ${err}`)
		}
	}
	async getOneTransByLessonIdAndStudentId(
		lesson_id: string,
		student_id: string
	): Promise<TransType[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * FROM trans WHERE lesson_id = $1 AND student_id = $2'
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
	async getOneTransByChapterName(name: string): Promise<TransType[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from trans WHERE chapter_name=($1)'
			//run query
			const result = await connect.query(sql, [name])
			//release connect
			connect.release()
			//return created student
			return result.rows
		} catch (err) {
			throw new Error(`name:${name}, ${err}`)
		}
	}
}
