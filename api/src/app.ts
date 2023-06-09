import express, { Request, Response, NextFunction } from 'express'
import Logging from './library/Logging'
import userRoutes from './routes/userRoutes'
import laptopRoutes from './routes/laptopRoutes'
import createHttpError, { isHttpError } from 'http-errors'
import cors from 'cors'

const app = express()
app.use(cors())

app.use((req, res, next) => {
  Logging.info(
    `Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`
  )

  res.on('finish', () => {
    Logging.info(
      `Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`
    )
  })
  next()
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//   Rules of the API
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({})
  }

  next()
})

//Routes
app.use('/api/user', userRoutes)
app.use('/api/laptop', laptopRoutes)

//Error Handling
app.use((req, res, next) => {
  next(createHttpError(404, 'Endpoint not found'))
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  Logging.error(error)
  let errorMessage = 'An unknown error occured.'
  let statusCode = 500
  if (isHttpError(error)) {
    statusCode = error.status
    errorMessage = error.message
  }
  res.status(statusCode).json({ error: errorMessage })
})

export default app
