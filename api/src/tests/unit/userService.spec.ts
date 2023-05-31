import * as userService from '../../services/userService'
import mongoose from 'mongoose'
import { connectDb } from '../../config/dbConfig'
import User from '../../models/User'
import dotenv from 'dotenv'

const configuration = dotenv.config()

describe('MongoDB service', () => {
  let mongoClient: typeof mongoose

  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    firstName: 'Aubrey',
    lastName: 'Mina',
    userName: 'abmina',
  })

  beforeAll(async () => {
    mongoClient = await connectDb(
      configuration?.parsed?.MONGO_URL_TEST as string
    )
  })

  afterAll(async () => {
    await mongoClient.connection.close()
  })

  afterEach(async () => {
    await mongoClient.connection.db.dropDatabase()
  })

  describe('Users', () => {
    test('Add new user and get all users', async () => {
      await userService.createUser(user)

      const users = await userService.getAllUsers()

      expect(users.length).toBe(1)
    })
  })
})
