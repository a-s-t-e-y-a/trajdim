import {Router} from 'express'
import { signupPost } from './controller/singnup_post_controller'
const signup = Router()

signup.post('/signup',signupPost)

export default signup
