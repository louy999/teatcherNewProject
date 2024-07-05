import db from '../database/index'
import config from '../config'
import Comment from '../types/comment.types'

export default class CommentModel {
	//create comment
	async createComment(u: Comment): Promise<Comment> {
		try {
			const connect = await db.connect()
			const sql = `INSERT INTO comment (description, student, username, lesson_id) values ($1, $2, $3, $4) returning *`
			const res = await connect.query(sql, [
				u.description,
				u.student,
				u.username,
				u.lesson_id,
			])
			connect.release()
			return res.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}

	//get all Comments
	async getAllComment(): Promise<Comment[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from comment'
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
	//get specific comment by id
	async getOneCommentById(id: string): Promise<Comment> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from comment WHERE id=($1)'
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

	//get specific comment by name
	async getOneCommentByLessonId(lesson_id: string): Promise<Comment[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from comment WHERE lesson_id=($1)'
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
	//update comment
	async updateComment(u: Comment): Promise<Comment> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'UPDATE comment SET description=($1) WHERE id=($2) RETURNING *'
			//run query
			const result = await connect.query(sql, [u.description, u.id])
			//release connect
			connect.release()
			//return created student
			return result.rows[0]
		} catch (err) {
			throw new Error(`id:${u.id}, ${err}`)
		}
	}
	//delete comment
	async deleteComment(id: string): Promise<Comment> {
		try {
			const connect = await db.connect()
			const sql = `DELETE from comment WHERE id=($1) RETURNING *`
			const res = await connect.query(sql, [id])
			connect.release()
			//return created student
			return res.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
}
