import db from '../database/index'
import config from '../config'
import Chapter from '../types/chapter.types'

export default class ChapterModel {
	//create chapter
	async createChapter(u: Chapter): Promise<Chapter> {
		try {
			const connect = await db.connect()
			const sql = `INSERT INTO chapter (name) values ($1) returning *`
			const res = await connect.query(sql, [u.name])
			connect.release()
			return res.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}

	//get all chapters
	async getAllChapter(): Promise<Chapter[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from chapter'
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
	//get specific chapter by id
	async getOneChapterById(id: string): Promise<Chapter> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from chapter WHERE id=($1)'
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

	//get specific chapter by name
	async getOneChapterByName(id: string): Promise<Chapter> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from chapter WHERE name=($1)'
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
	//update chapter
	async updateChapter(u: Chapter): Promise<Chapter> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'UPDATE chapter SET name=($1) WHERE id=($2) RETURNING *'
			//run query
			const result = await connect.query(sql, [u.name, u.id])
			//release connect
			connect.release()
			//return created student
			return result.rows[0]
		} catch (err) {
			throw new Error(`id:${u.id}, ${err}`)
		}
	}
	//delete chapter
	async deleteChapter(chapter: string, name: string): Promise<Chapter> {
		try {
			const connect = await db.connect()
			const deleteLesson = `DELETE from lesson WHERE chapter=($1) RETURNING *`
			const result = await connect.query(deleteLesson, [chapter])
			const sql = `DELETE from chapter WHERE name=($1) RETURNING *`
			const res = await connect.query(sql, [name])
			connect.release()
			//return created user
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
}
