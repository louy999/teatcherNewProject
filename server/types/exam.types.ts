type Exam = {
	id?: string
	date?: string
	title: string
	lesson_id: string
	description: string
	image: string
	video: string
	choices: string[]
	answer: string
	done: boolean | string
}
export default Exam
