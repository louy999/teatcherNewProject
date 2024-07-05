import db from '../database/index'
import config from '../config'
import Replay from '../types/replay.types'

export default class ReplayModel {
	//create replay
	async createReplay(u: Replay): Promise<Replay> {
		try {
			const connect = await db.connect()
			const sql = `INSERT INTO replay (description, student, username, comment_id) values ($1, $2, $3, $4) returning *`
			const res = await connect.query(sql, [
				u.description,
				u.student,
				u.username,
				u.comment_id,
			])
			connect.release()
			return res.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}

	//get all Replays
	async getAllReplay(): Promise<Replay[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from replay'
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
	//get specific replay by id
	async getOneReplayById(id: string): Promise<Replay> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from replay WHERE id=($1)'
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

	//get specific replay by name
	async getOneReplayByCommentId(comment_id: string): Promise<Replay[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from replay WHERE comment_id=($1)'
			//run query
			const result = await connect.query(sql, [comment_id])
			//release connect
			connect.release()
			//return created student
			return result.rows
		} catch (err) {
			throw new Error(`id:${comment_id}, ${err}`)
		}
	}
	//update replay
	async updateReplay(u: Replay): Promise<Replay> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'UPDATE replay SET description=($1) WHERE id=($2) RETURNING *'
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
	//delete replay
	async deleteReplay(id: string): Promise<Replay> {
		try {
			const connect = await db.connect()
			const sql = `DELETE from replay WHERE id=($1) RETURNING *`
			const res = await connect.query(sql, [id])
			connect.release()
			//return created student
			return res.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
}
