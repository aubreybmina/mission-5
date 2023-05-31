import * as laptopService from '../../services/laptopService'
import mongoose from 'mongoose'
import { connectDb } from '../../config/dbConfig'
import Laptop from '../../models/Laptop'
import dotenv from 'dotenv'

const configuration = dotenv.config()

describe('MongoDB service', () => {
  let mongoClient: typeof mongoose

  const laptop = new Laptop({
    _id: new mongoose.Types.ObjectId(),
    brand: 'Lenovo',
    model: 'V15 G2',
    category: 'Business',
    cpuFamily: 'Intel Core i5',
    memorySize: 8,
    screenSize: 15.6,
    screenResolution: '1920x1080',
    ssdCapacity: 256,
    operatingSystem: 'Windows 11 Pro',
    warranty: '1 Year',
    features: 'WiFiAC + BT5, Webcam, USB-C, HDMI1.4b',
    price: 977.5,
    imageURL:
      'https://www.pbtech.co.nz/imgprod/N/B/NBKLEN150200__1.jpg?h=2930035477',
    userName: '64760b2f2bbf7c731a5c7edf',
  })

  beforeAll(async () => {
    mongoClient = await connectDb(
      configuration?.parsed?.MONGO_URL_TEST as string
    )
  })

  afterAll(async () => {
    await mongoClient.connection.db.dropDatabase()
    await mongoClient.connection.close()
  })

  describe('Laptops CRUD', () => {
    test('Should create a new laptop record and get all laptops then return the length = 1', async () => {
      await laptopService.createLaptop(laptop)

      const laptops = await laptopService.getAllLaptops()

      expect(laptops.length).toBe(1)
    })

    test('Should get the id of the first laptop from getAllLaptops() then use it for getLaptop function', async () => {
      const laptops = await laptopService.getAllLaptops()
      const retrieve = await laptopService.getLaptop(laptops[0]._id)

      expect(laptops.length).toBe(1)
      expect(retrieve).toEqual(laptops[0])
    })

    test('Should get the id of the first laptop from getAllLaptops() then use it for updateLaptop function', async () => {
      const expected = 'Gaming'
      const input = {
        brand: 'Lenovo',
        model: 'V15 G2',
        category: expected,
        cpuFamily: 'Intel Core i5',
        memorySize: 8,
        screenSize: 15.6,
        screenResolution: '1920x1080',
        ssdCapacity: 256,
        operatingSystem: 'Windows 11 Pro',
        warranty: '1 Year',
        features: 'WiFiAC + BT5, Webcam, USB-C, HDMI1.4b',
        price: 977.5,
        imageURL:
          'https://www.pbtech.co.nz/imgprod/N/B/NBKLEN150200__1.jpg?h=2930035477',
        userName: '64760b2f2bbf7c731a5c7edf',
      }
      const laptops = await laptopService.getAllLaptops()

      const laptop = await laptopService.updateLaptop(laptops[0]._id, input)

      expect(laptop?.category).toEqual(expected)
    })

    test('Should delete the laptop using the id of the first user retrieved from getAllLaptops', async () => {
      const laptops = await laptopService.getAllLaptops()

      const retrieve = await laptopService.deleteLaptop(laptops[0]._id)

      expect(retrieve).toEqual(
        `${laptops[0].brand} ${laptops[0].model} has been deleted.`
      )
    })
  })
})
