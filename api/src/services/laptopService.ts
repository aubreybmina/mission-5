import { ILaptop } from '../types/Interfaces'
import Laptop from '../models/Laptop'
import mongoose from 'mongoose'
import Logging from '../library/Logging'

export const createLaptop = async (input: ILaptop) => {
  const laptop = new Laptop({
    _id: new mongoose.Types.ObjectId(),
    brand: input.brand,
    model: input.model,
    category: input.category,
    screenSize: input.screenSize,
    screenResultion: input.screenResultion,
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
  try {
    const laptop = await Laptop.findById(laptopId).populate('userName')
    return laptop
  } catch (e) {
    const error = new Error('No record found.')
    Logging.error(error)
  }
}

export const getAllLaptops = async () => {
  let laptops
  try {
    laptops = await Laptop.find().populate('userName')
  } catch (e) {
    const error = new Error('No records found.')
    Logging.error(error)
  }
  return laptops
}

export const updateLaptop = async (laptopId: string, input: ILaptop) => {
  let laptop
  try {
    laptop = await Laptop.findById(laptopId)

    if (laptop) {
      const newInput = {
        brand: input.brand,
        model: input.model,
        category: input.category,
        screenSize: input.screenSize,
        screenResultion: input.screenResultion,
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
  } catch (e) {
    const error = new Error('No record found.')
    Logging.error(error)
  }
}

export const deleteLaptop = async (laptopId: string) => {
  try {
    const laptop = await Laptop.findByIdAndDelete(laptopId)
    return `${laptop?.brand} ${laptop?.model} has been deleted.`
  } catch (e) {
    const error = new Error('No record found.')
    Logging.error(error)
  }
}
