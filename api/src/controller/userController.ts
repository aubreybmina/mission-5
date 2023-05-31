import { NextFunction, Request, Response } from 'express'
import * as userService from '../services/userService'

export const createUser = (req: Request, res: Response, next: NextFunction) => {
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const userName = req.body.userName
  const input = {
    firstName: firstName,
    lastName: lastName,
    userName: userName,
  }
  userService
    .createUser(input)
    .then((newUser) => res.status(200).json({ newUser }))
    .catch((error) => next(error))
}

export const getUser = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId
  userService
    .getUser(userId)
    .then((user) => res.status(200).json({ user }))
    .catch((error) => next(error))
}

export const getAllUsers = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  userService
    .getAllUsers()
    .then((users) => res.status(200).json({ users }))
    .catch((error) => next(error))
}

export const updateUser = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const userName = req.body.userName
  const input = {
    firstName: firstName,
    lastName: lastName,
    userName: userName,
  }
  userService
    .updateUser(userId, input)
    .then((user) => res.status(200).json({ user }))
    .catch((error) => next(error))
}

export const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId
  userService
    .deleteUser(userId)
    .then((message) => res.status(200).json({ message }))
    .catch((error) => next(error))
}
