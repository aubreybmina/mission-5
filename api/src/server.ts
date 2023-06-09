import http from 'http'

import { connectDb } from './config/dbConfig'

import Logging from './library/Logging'

import app from './app'

import dotenv from 'dotenv'

const configuration = dotenv.config()

const SERVER_PORT = configuration?.parsed?.SERVER_PORT || 9000

const MONGO_URL = configuration?.parsed?.MONGO_URL

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
