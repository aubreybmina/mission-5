import dotenv from 'dotenv'
import http from 'http'
import { connectDb } from './config/dbConfig'
import Logging from './library/Logging'
import app from './app'

const configuration = dotenv.config()

const SERVER_PORT = configuration?.parsed?.SERVER_PORT
  ? Number(configuration?.parsed?.SERVER_PORT)
  : 1337

try {
  connectDb(configuration?.parsed?.MONGO_URL as string)
  Logging.info('Connected to mongoDB.')
  http
    .createServer(app)
    .listen(SERVER_PORT, () =>
      Logging.info(`Server is running on port ${SERVER_PORT}.`)
    )
} catch (error) {
  Logging.error('Unable to connect: ')
  Logging.error(error)
}
