import db from '../database/index'
import config from '../config'
import ViewsType from '../types/views.types'

export default class ViewsModel {
	//create views
	async createView(u: ViewsType): Promise<ViewsType> {
		try {
			const connect = await db.connect()
			const sql = `INSERT INTO views (student_id, lesson_id) values ($1, $2) returning *`
			const res = await connect.query(sql, [u.student_id, u.lesson_id])
			connect.release()
			return res.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}

	//get all Views
	async getAllView(): Promise<ViewsType[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from views'
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
	//get specific views by id
	async getOneViewById(id: string): Promise<ViewsType> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from views WHERE id=($1)'
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

	//get specific views by name
	async getOneViewByStudentName(id: string): Promise<ViewsType> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from views WHERE student_id=($1)'
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
	//get specific views by name
	async getOneViewByLessonId(id: string): Promise<ViewsType[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from views WHERE lesson_id=($1)'
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
}
