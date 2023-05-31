import { IUser } from '../types/Interfaces'
import User from '../models/User'
import mongoose from 'mongoose'
import createHttpError from 'http-errors'

export const createUser = async (input: IUser) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    firstName: input.firstName,
    lastName: input.lastName,
    userName: input.userName,
  })

  const newUser = await user.save()
  return newUser
}

export const getUser = async (userId: string) => {
  if (!mongoose.isValidObjectId(userId)) {
    throw createHttpError(400, 'Invalid user ID.')
  }
  const user = await User.findById(userId)
  if (!user) {
    throw createHttpError(404, 'User not found')
  }
  return user
}

export const getAllUsers = async () => {
  const users = await User.find()
  if (users.length === 0) {
    throw createHttpError(404, 'No records yet.')
  }
  return users
}

export const updateUser = async (userId: string, input: IUser) => {
  if (!mongoose.isValidObjectId(userId)) {
    throw createHttpError(400, 'Invalid user ID.')
  }

  const user = await User.findById(userId)

  if (!user) {
    throw createHttpError(404, 'User not found')
  }

  if (user) {
    const newInput = {
      firstName: input.firstName,
      lastName: input.lastName,
      userName: input.userName,
    }
    user.set(newInput)
    user.save()

    return user
  }
}

export const deleteUser = async (userId: string) => {
  if (!mongoose.isValidObjectId(userId)) {
    throw createHttpError(400, 'Invalid user ID.')
  }

  const user = await User.findByIdAndDelete(userId)

  if (!user) {
    throw createHttpError(404, 'User not found')
  }

  return `User account ${user?.userName} has been deleted.`
}
