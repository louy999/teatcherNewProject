import axios from 'axios'
import GetLessonFromChapter from './components/GetLessonFromChapter'
const ChapterPage = async () => {
	try {
		const chapterFetch = await axios.get(`${process.env.local}/chapter`)
		const dataFetch = chapterFetch.data.data
		return (
			<main className='w-full'>
				{dataFetch.map((chapter, index) => (
					<div
						key={index}
						className='w-full px-5 py-3 bg-bg100 shadow-md mb-4'>
						<span className='text-2xl border-b-2 border-b-text100 px-2 rounded-md mb-3 '>
							{chapter.name}
						</span>
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
