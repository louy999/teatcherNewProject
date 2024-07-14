import {Router} from 'express'
import studentRoutes from './api/student.routes'
import chapterRoutes from './api/chapter.routes'
import lessonRoutes from './api/lesson.routes'
import examRoutes from './api/exam.routes'
import commentRoutes from './api/comment.routes'
import replayRoutes from './api/replay.routes'
import parentRoutes from './api/parent.routes'

const routes = Router()
routes.use('/student', studentRoutes)
routes.use('/chapter', chapterRoutes)
routes.use('/lesson', lessonRoutes)
routes.use('/exam', examRoutes)
routes.use('/comment', commentRoutes)
routes.use('/replay', replayRoutes)
routes.use('/parent', parentRoutes)

export default routes
