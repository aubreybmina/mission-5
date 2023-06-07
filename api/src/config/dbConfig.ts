import mongoose, { ConnectOptions } from 'mongoose'

const connectionOptions: ConnectOptions = {
  serverSelectionTimeoutMS: 30000, // Increase the timeout to 30 seconds
}

export async function connectDb(mongoUrl: string) {
  return await mongoose.connect(mongoUrl, connectionOptions)
}
