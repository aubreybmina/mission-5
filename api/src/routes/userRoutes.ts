import express from 'express'
import {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from '../controller/userController'

const router = express.Router()
/*Routes for carController*/
router.get('/user/', getAllUsers)
router.post('/user/', createUser)
router.get('/user/:userId', getUser)
router.put('/user/:userId', updateUser)
router.delete('/user/:userId', deleteUser)

export default router
