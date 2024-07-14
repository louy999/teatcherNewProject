import db from '../database/index'
import Parent from '../types/parent.types'
import bcrypt from 'bcrypt'
import config from '../config'

const hashPassword = (password: string) => {
	const salt = parseInt(config.salt as unknown as string, 10)
	return bcrypt.hashSync(`${password}${config.pepper}`, salt)
}

export default class ParentModel {
	//create parent
	async createParent(u: Parent): Promise<Parent> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql =
				'INSERT INTO parent ( parent_name, parent_number, password, student_id ) values ($1, $2, $3, $4) returning id, date, parent_name, parent_number  ,student_id'
			//run query
			const result = await connect.query(sql, [
				u.parent_name,
				u.parent_number,
				hashPassword(u.password),
				u.student_id,
			])
			//release connect
			connect.release()
			//return created parent
			return result.rows[0]
		} catch (err: any) {
			// throw new Error
			throw new Error(`${err} `)
		}
	}
	//get all parent
	async getAllParents(): Promise<Parent[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql =
				'SELECT id, date, parent_name, parent_number, student_id from parent'
			//run query
			const result = await connect.query(sql)
			//release connect
			connect.release()
			//return All Parents
			return result.rows
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	//get specific parent
	async getOneParent(id: string): Promise<Parent> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql =
				'SELECT id, date, parent_name, parent_number, student_id from parent WHERE id=($1)'
			//run query
			const result = await connect.query(sql, [id])
			//release connect
			connect.release()
			//return created parent
			return result.rows[0]
		} catch (err) {
			throw new Error(`.could not find user ${id}, ${err}`)
		}
	}

	async getOneFromPhone(parent_number: string): Promise<Parent> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql =
				'SELECT id, date, parent_name, parent_number, student_id from parent WHERE parent_number=($1)'
			//run query
			const result = await connect.query(sql, [parent_number])
			//release connect
			connect.release()
			//return created parent
			return result.rows[0]
		} catch (err) {
			throw new Error(`.could not find parent number : ${parent_number}, ${err}`)
		}
	}

	//update parent
	async updateParent(u: Parent): Promise<Parent> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = `UPDATE parent SET parent_name=$1, parent_number=$2,  password=$3 WHERE id=$4 RETURNING *`
			//run query
			const result = await connect.query(sql, [
				u.parent_name,
				u.parent_number,
				u.password,
				u.id,
			])
			//release connect
			connect.release()
			//return created parent
			return result.rows[0]
		} catch (err) {
			throw new Error(`could not update  parent ${u.parent_number}, ${err}`)
		}
	}

	//delete user
	async deleteParent(id: string): Promise<Parent> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'DELETE from parent  WHERE id=($1) RETURNING *'
			//run query
			const result = await connect.query(sql, [id])
			//release connect
			connect.release()
			//return created user
			return result.rows[0]
		} catch (err) {
			throw new Error(`could not delete  user ${id}, ${err}`)
		}
	}
	//authenticate user
	async auth(parent_number: string, password: string): Promise<Parent | null> {
		try {
			const connect = await db.connect()
			const sql = `SELECT password FROM parent WHERE parent_number=($1)`
			const res = await connect.query(sql, [parent_number])
			if (res.rows.length) {
				const {password: hashPassword} = res.rows[0]
				const isPassValid = bcrypt.compareSync(
					`${password}${config.pepper}`,
					hashPassword
				)
				if (isPassValid) {
					const userInfo = await connect.query(
						`SELECT parent_name, parent_number, password, student_id FROM parent WHERE parent_number=($1)`,
						[parent_number]
					)
					return userInfo.rows[0]
				} else {
					throw new Error('password is wrong')
				}
			} else {
				throw new Error('number is wrong')
			}
			connect.release()
			return null
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
}
