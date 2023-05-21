import express from 'express'
import authenticateToken from '../../middleware/auth'
import { coustmerPost } from './controller/coustmer_controller'
const coustmer = express.Router()
coustmer.post('/coustmer',authenticateToken,coustmerPost)

export default coustmer
