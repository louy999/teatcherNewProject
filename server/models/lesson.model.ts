import db from '../database/index'
import config from '../config'
import Lesson from '../types/lesson.types'

export default class LessonModel {
	//create lesson
	async createLesson(u: Lesson): Promise<Lesson> {
		try {
			const connect = await db.connect()
			const sql = `INSERT INTO lesson (name, img, price, video, file, chapter_id, view) values ($1, $2, $3, $4, $5, $6, $7) returning *`
			const res = await connect.query(sql, [
				u.name,
				u.img === '' ? 'images.png' : u.img,
				u.price,
				u.video,
				u.file,
				u.chapter_id,
				u.view === '' ? 0 : u.view,
			])
			connect.release()
			return res.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}

	//get all lesson
	async getAllLesson(): Promise<Lesson[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from lesson'
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
	//get specific lesson by id
	async getOneLessonById(id: string): Promise<Lesson> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from lesson WHERE id=($1)'
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

	//get specific lesson by name
	async getOneLessonByChapterID(chapter_id: string): Promise<Lesson[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from lesson WHERE chapter_id=($1)'
			//run query
			const result = await connect.query(sql, [chapter_id])
			//release connect
			connect.release()
			//return created student
			return result.rows
		} catch (err) {
			throw new Error(`id:${chapter_id}, ${err}`)
		}
	}
	//update lesson
	async updateLesson(u: Lesson): Promise<Lesson> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql =
				'UPDATE lesson SET name=$1, img=$2, price=$3, video=$4, file=$5, chapter_id=$6, view=$7 WHERE id=($8) RETURNING *'
			//run query
			const result = await connect.query(sql, [
				u.name,
				u.img,
				u.price,
				u.video,
				u.file,
				u.chapter_id,
				u.view,
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

	//delete lesson
	async deleteLesson(id: string): Promise<Lesson> {
		try {
			const connect = await db.connect()
			const sql = `DELETE from lesson WHERE id=($1) RETURNING *`
			const res = await connect.query(sql, [id])
			connect.release()
			return res.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
}
