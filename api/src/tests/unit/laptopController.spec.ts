import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose, { ConnectOptions } from 'mongoose'
import { getLaptop } from '../../controller/laptopController'
import { createRequest, createResponse } from 'node-mocks-http'

let mongoServer: any

beforeAll(async () => {
  mongoServer = new MongoMemoryServer()
  const mongoUri = await mongoServer.getUri()
  await mongoose.connect(mongoUri)
})

afterAll(async () => {
  await mongoose.disconnect()
  await mongoServer.stop()
})

describe('getLaptop', () => {
  test('should get one laptop', () => {
    const req = createRequest()
    const res = createResponse()
    const next = jest.fn()

    const expected = {
      laptop: {
        _id: '6475ec8c228904e12efffc89',
        brand: 'Lenovo',
        model: 'V15 G2',
        category: 'Business',
        cpuFamily: 'Intel Core i5',
        memorySize: 8,
        screenSize: 15,
        screenResolution: '1920x1080',
        ssdCapacity: 256,
        operatingSystem: 'Windows 11 Pro',
        warranty: '1 Year',
        features: 'WiFiAC + BT5, Webcam, USB-C, HDMI1.4b',
        price: 977,
        imageURL:
          'https://www.pbtech.co.nz/imgprod/N/B/NBKLEN150200__1.jpg?h=2930035477',
        userName: {
          _id: '64760b2f2bbf7c731a5c7edf',
          firstName: 'Aubrey',
          lastName: 'Mina',
          userName: 'abmina',
        },
        createdAt: '2023-05-30T12:31:08.158Z',
        updatedAt: '2023-05-30T20:42:38.636Z',
        __v: 0,
      },
    }

    req.params._id = '6475ec8c228904e12efffc89'

    getLaptop(req, res, next)

    expect(res.statusCode).toBe(200)
    expect(res.json()._getData()).toEqual(expected)
  })
})
