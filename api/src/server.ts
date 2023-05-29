import env from 'dotenv'
import mongoose from 'mongoose'
import http from 'http'
import { config } from './config/dbConfig'
import Logging from './library/Logging'
import app from './app'

mongoose
  .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
  .then(() => {
    Logging.info('Connected to mongoDB.')
    http
      .createServer(app)
      .listen(config.server.port, () =>
        Logging.info(`Server is running on port ${config.server.port}.`)
      )
  })
  .catch((error) => {
    Logging.error('Unable to connect: ')
    Logging.error(error)
  })
