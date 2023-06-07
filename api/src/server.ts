import dotenv from 'dotenv'
import http from 'http'
import { connectDb } from './config/dbConfig'
import Logging from './library/Logging'
import app from './app'

const configuration = dotenv.config()

const SERVER_PORT = 9090 || 3000

const MONGO_URL = `mongodb://127.0.0.1:27017/pbtech`

try {
  connectDb(MONGO_URL as string)
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
