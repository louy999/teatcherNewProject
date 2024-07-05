import db from '../database/index'
import Student from '../types/student.types'
import bcrypt from 'bcrypt'
import config from '../config'

const hashPassword = (password: string) => {
	const salt = parseInt(config.salt as unknown as string, 10)
	return bcrypt.hashSync(`${password}${config.pepper}`, salt)
}

export default class StudentMode {
	//create student
	async createStudent(u: Student): Promise<Student> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql =
				'INSERT INTO student ( username, phone, password, imgprofile, stage, access ) values ($1, $2, $3, $4, $5,$6) returning id, date, username, imgprofile, stage, phone, access, password'
			//run query
			const result = await connect.query(sql, [
				u.username,
				u.phone,
				hashPassword(u.password),
				u.imgprofile === '' ? 'blank-profile-.png' : u.imgprofile,
				u.stage,
				u.access === '' ? false : u.access,
			])
			//release connect
			connect.release()
			//return created student
			return result.rows[0]
		} catch (err: any) {
			// throw new Error
			throw new Error(`${err} `)
		}
	}
	//get all student
	async getAllStudents(): Promise<Student[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql =
				'SELECT id, date, username, imgprofile, stage, phone, access from student'
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
	//get specific student
	async getOneStudent(id: string): Promise<Student> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql =
				'SELECT id, username, phone, stage, date, imgprofile, access from student WHERE id=($1)'
			//run query
			const result = await connect.query(sql, [id])
			//release connect
			connect.release()
			//return created student
			return result.rows[0]
		} catch (err) {
			throw new Error(`.could not find user ${id}, ${err}`)
		}
	}

	async getOneFromPhone(phone: string): Promise<Student> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql =
				'SELECT id, username, phone, stage, date, imgprofile, access from student WHERE phone=($1)'
			//run query
			const result = await connect.query(sql, [phone])
			//release connect
			connect.release()
			//return created student
			return result.rows[0]
		} catch (err) {
			throw new Error(`.could not find student number : ${phone}, ${err}`)
		}
	}
	async getOneFromAccess(access: string): Promise<Student[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql =
				'SELECT id, username, phone, stage, date, imgprofile, access from student WHERE access=($1)'
			//run query
			const result = await connect.query(sql, [access])
			//release connect
			connect.release()
			//return created student
			return result.rows
		} catch (err) {
			throw new Error(`.could not find student access : ${access}, ${err}`)
		}
	}
	//update student
	async updateStudent(u: Student): Promise<Student> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = `UPDATE student SET username=$1, phone=$2,  stage=$3 WHERE id=$4 RETURNING id, username, phone, stage, date, imgprofile, access`
			//run query
			const result = await connect.query(sql, [u.username, u.phone, u.stage, u.id])
			//release connect
			connect.release()
			//return created student
			return result.rows[0]
		} catch (err) {
			throw new Error(`could not update  student ${u.username}, ${err}`)
		}
	}

	async updateImgStudent(u: Student): Promise<Student> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = `UPDATE student SET  imgprofile=$1  WHERE id=$2 RETURNING id, username, phone, stage, date, imgprofile, access`
			//run query
			const result = await connect.query(sql, [u.imgprofile, u.id])
			//release connect
			connect.release()
			//return created student
			return result.rows[0]
		} catch (err) {
			throw new Error(`could not update  student ${u.id}, ${err}`)
		}
	}
	async updateAccessStudent(u: Student): Promise<Student> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = `UPDATE student SET  access=$1  WHERE id=$2 RETURNING *`
			//run query
			const result = await connect.query(sql, [u.access, u.id])
			//release connect
			connect.release()
			//return created student
			return result.rows[0]
		} catch (err) {
			throw new Error(`could not update  student ${u.id}, ${err}`)
		}
	}

	async updatePass(u: Student): Promise<Student> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = `UPDATE student SET  password=$1  WHERE id=$2 RETURNING id, username, phone, stage, date, imgprofile, access`
			//run query
			const result = await connect.query(sql, [hashPassword(u.password), u.id])
			//release connect
			connect.release()
			//return created student
			return result.rows[0]
		} catch (err) {
			throw new Error(`could not update  student , ${err}`)
		}
	}

	//delete user
	async deleteStudent(id: string): Promise<Student> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql =
				'DELETE from student  WHERE id=($1) RETURNING id, username, phone, stage, date, imgprofile, access'
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
	async auth(phone: string, password: string): Promise<Student | null> {
		try {
			const connect = await db.connect()
			const sql = `SELECT password FROM student WHERE phone=$1`
			const res = await connect.query(sql, [phone])
			if (res.rows.length) {
				const {password: hashPassword} = res.rows[0]
				const isPassValid = bcrypt.compareSync(
					`${password}${config.pepper}`,
					hashPassword
				)
				if (isPassValid) {
					const userInfo = await connect.query(
						`SELECT id, username, phone, imgprofile, stage, date, access FROM student WHERE phone=($1)`,
						[phone]
					)
					return userInfo.rows[0]
				} else {
					throw new Error('password is wrong')
				}
			} else {
				throw new Error('phone is wrong')
			}
			connect.release()
			return null
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
}
