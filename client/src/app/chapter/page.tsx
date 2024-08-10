import axios from 'axios'
import GetLessonFromChapter from './components/GetLessonFromChapter'
const ChapterPage = async () => {
	try {
		const chapterFetch = await axios.get(`${process.env.local}/chapter`)
		const dataFetch = chapterFetch.data.data
		return (
			<main>
				{dataFetch.map((chapter, index) => (
					<div key={index}>
						<span>{chapter.name}</span>
						<GetLessonFromChapter chapterId={chapter.id} />
					</div>
				))}
			</main>
		)
	} catch (error) {
		console.log(error)
	}
}

export default ChapterPage
