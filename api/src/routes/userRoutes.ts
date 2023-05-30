import express from 'express'
import {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from '../controller/userController'

const userRouter = express.Router()

userRouter.get('/', getAllUsers)
userRouter.post('/', createUser)
userRouter.get('/:userId', getUser)
userRouter.put('/:userId', updateUser)
userRouter.delete('/:userId', deleteUser)

export default userRouter
