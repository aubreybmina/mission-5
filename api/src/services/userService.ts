import { IUser } from '../types/Interfaces'
import User from '../models/User'
import mongoose from 'mongoose'
import Logging from '../library/Logging'

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
  try {
    const user = await User.findById(userId)
    return user
  } catch (e) {
    const error = new Error('No record found.')
    Logging.error(error)
  }
}

export const getAllUsers = async () => {
  let users
  try {
    users = await User.find()
  } catch (e) {
    const error = new Error('No records found.')
    Logging.error(error)
  }
  return users
}

export const updateUser = async (userId: string, input: IUser) => {
  let user
  try {
    user = await User.findById(userId)

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
  } catch (e) {
    const error = new Error('No record found.')
    Logging.error(error)
  }
}

export const deleteUser = async (userId: string) => {
  try {
    const user = await User.findByIdAndDelete(userId)
    return `User account ${user?.userName} has been deleted.`
  } catch (e) {
    const error = new Error('No record found.')
    Logging.error(error)
  }
}
