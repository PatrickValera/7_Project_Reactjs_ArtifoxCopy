import express from 'express'
const router = express.Router()
import {registerUser,authenUser} from '../controllers/userController.js'

router.route("/").post(registerUser)
router.post('/login',authenUser)

export default router