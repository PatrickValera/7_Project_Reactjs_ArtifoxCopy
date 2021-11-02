import express from 'express'
const router = express.Router()
import {registerUser,authenUser,userProfile} from '../controllers/userController.js'

router.route("/").post(registerUser)
router.post('/login',authenUser)
router.route('/profile').get(userProfile)

export default router