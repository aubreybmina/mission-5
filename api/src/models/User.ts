import mongoose, { Document, Schema } from 'mongoose'
import { IUser } from '../types/Interfaces'

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
  },
  {
    versionKey: false,
  }
)

export default mongoose.model<IUserModel>('User', UserSchema)
