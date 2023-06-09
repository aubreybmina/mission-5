// import * as userService from '../../services/userService'
// import mongoose from 'mongoose'
// import { connectDb } from '../../config/dbConfig'
// import User from '../../models/User'
// import dotenv from 'dotenv'

// const configuration = dotenv.config()

// describe('MongoDB service', () => {
//   let mongoClient: typeof mongoose

//   const user = new User({
//     _id: new mongoose.Types.ObjectId(),
//     firstName: 'John',
//     lastName: 'Doe',
//     userName: 'johndoe',
//   })

//   beforeAll(async () => {
//     mongoClient = await connectDb(
//       configuration?.parsed?.MONGO_URL_TEST as string
//     )
//   })

//   afterAll(async () => {
//     await mongoClient.connection.db.dropDatabase()
//     await mongoClient.connection.close()
//   })

//   describe('Users CRUD', () => {
//     test('Should create a new user and get all user then return the length = 1', async () => {
//       await userService.createUser(user)

//       const users = await userService.getAllUsers()

//       expect(users.length).toBe(1)
//     })

//     test('Should get the id of the first user from getAllUsers() then use it for getUser function', async () => {
//       const users = await userService.getAllUsers()
//       const retrieve = await userService.getUser(users[0]._id)

//       expect(users.length).toBe(1)
//       expect(retrieve).toEqual(users[0])
//     })

//     test('Should get the id of the first user from getAllUsers() then use it for updateUser function', async () => {
//       const expected = 'jdoe'
//       const input = {
//         firstName: 'John',
//         lastName: 'Doe',
//         userName: expected,
//       }
//       const users = await userService.getAllUsers()

//       const user = await userService.updateUser(users[0]._id, input)

//       expect(user?.userName).toEqual(expected)
//     })

//     test('Should delete the user using the id of the first user retrieved from getAllUsers', async () => {
//       const users = await userService.getAllUsers()

//       const retrieve = await userService.deleteUser(users[0]._id)

//       expect(retrieve).toEqual(
//         `User account of ${users[0].firstName} ${users[0].lastName} has been deleted.`
//       )
//     })
//   })
// })
