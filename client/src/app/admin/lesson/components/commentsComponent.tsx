import {useEffect, useState} from 'react'
import axios from 'axios'
import {FaRegComment} from 'react-icons/fa'

const CommentsComponent = ({id}) => {
	const [lengthComment, setLengthComment] = useState(0)
	useEffect(() => {
		const commentFetch = async () => {
			try {
				const res = await axios.get(`${process.env.local}/comment/lesson/${id}`)
				setLengthComment(res.data.data.length)
			} catch (error) {
				console.log(error)
			}
		}
		commentFetch()
	}, [id])

	return (
		<>
			<FaRegComment />
			{lengthComment}
		</>
	)
}

export default CommentsComponent
