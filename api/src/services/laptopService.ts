import { ILaptop } from '../types/Interfaces'
import Laptop from '../models/Laptop'
import mongoose from 'mongoose'
import createHttpError from 'http-errors'

export const createLaptop = async (input: ILaptop) => {
  const laptop = new Laptop({
    _id: new mongoose.Types.ObjectId(),
    brand: input.brand,
    model: input.model,
    category: input.category,
    screenSize: input.screenSize,
    screenResolution: input.screenResolution,
    cpuFamily: input.cpuFamily,
    memorySize: input.memorySize,
    ssdCapacity: input.ssdCapacity,
    price: input.price,
    operatingSystem: input.operatingSystem,
    warranty: input.warranty,
    features: input.features,
    imageURL: input.imageURL,
    userName: input.userName,
  })

  const newLaptop = await laptop.save()
  return newLaptop
}

export const getLaptop = async (laptopId: string) => {
  if (!mongoose.isValidObjectId(laptopId)) {
    throw createHttpError(400, 'Invalid product ID.')
  }
  const laptop = await Laptop.findById(laptopId).populate('userName')
  if (!laptop) {
    throw createHttpError(404, 'Product not found')
  }
  return laptop
}

export const getAllLaptops = async () => {
  const laptops = await Laptop.find().populate('userName')
  if (laptops.length === 0) {
    throw createHttpError(404, 'No records yet.')
  }
  return laptops
}

export const updateLaptop = async (laptopId: string, input: ILaptop) => {
  if (!mongoose.isValidObjectId(laptopId)) {
    throw createHttpError(400, 'Invalid product ID.')
  }
  const laptop = await Laptop.findById(laptopId)

  if (!laptop) {
    throw createHttpError(404, 'Product not found')
  }

  if (laptop) {
    const newInput = {
      brand: input.brand,
      model: input.model,
      category: input.category,
      screenSize: input.screenSize,
      screenResolution: input.screenResolution,
      cpuFamily: input.cpuFamily,
      memorySize: input.memorySize,
      ssdCapacity: input.ssdCapacity,
      price: input.price,
      operatingSystem: input.operatingSystem,
      warranty: input.warranty,
      features: input.features,
      userName: input.userName,
    }
    laptop.set(newInput)
    laptop.save()

    return laptop
  }
}

export const deleteLaptop = async (laptopId: string) => {
  if (!mongoose.isValidObjectId(laptopId)) {
    throw createHttpError(400, 'Invalid product ID.')
  }
  const laptop = await Laptop.findByIdAndDelete(laptopId)

  if (!laptop) {
    throw createHttpError(404, 'Product not found')
  }

  return `${laptop?.brand} ${laptop?.model} has been deleted.`
}
