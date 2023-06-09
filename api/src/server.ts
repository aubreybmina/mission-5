import http from 'http'

import { connectDb } from './config/dbConfig'

import Logging from './library/Logging'

import app from './app'

const SERVER_PORT = 9090 || 9000

const MONGO_URL = 'mongodb://mongo:27017/PBTech?'

try {
  connectDb(MONGO_URL as string)

  http

    .createServer(app)

    .listen(SERVER_PORT, () =>
      Logging.info(`Server is running on port ${SERVER_PORT}.`)
    )
} catch (error) {
  Logging.error('Unable to connect: ')

  Logging.error(error)
}
