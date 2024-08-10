import axios from 'axios'
interface chapterIdType {
	id: string
}
const GetLessonFromChapter: React.FC<chapterIdType> = async ({chapterId}) => {
	try {
		const getLessonFetch = await axios.get(
			`${process.env.local}/lesson/chapter/${chapterId}`
		)
		const dataLessonFromChapter = getLessonFetch.data.data

		return (
			<div>
				{dataLessonFromChapter.map((lesson, index) => (
					<div key={index}>{lesson.name}</div>
				))}
			</div>
		)
	} catch (error) {
		console.log(error)
	}
}

export default GetLessonFromChapter
