import mongoose, { Document, Schema } from 'mongoose'
import { ILaptop } from '../types/Interfaces'

export interface ILaptopModel extends ILaptop, Document {}

const LaptopSchema: Schema = new Schema(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    category: { type: String, required: true },
    cpuFamily: { type: String, required: false },
    memorySize: { type: Number, required: false },
    screenSize: { type: Number, required: false },
    screenResultion: { type: String, required: false },
    ssdCapacity: { type: Number, required: false },
    operatingSystem: { type: String, required: false },
    warranty: { type: String, required: false },
    features: { type: String, required: false },
    price: { type: Number, required: true },
    imageURL: { type: String, required: true },
    userName: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model<ILaptopModel>('Laptop', LaptopSchema)
