import { NextFunction, Request, Response } from 'express'
import * as laptopService from '../services/laptopService'

export const createLaptop = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const brand = req.body.brand
  const model = req.body.model
  const category = req.body.category
  const screenSize = req.body.screenSize
  const screenResolution = req.body.screenResolution
  const cpuFamily = req.body.cpuFamily
  const memorySize = req.body.memorySize
  const ssdCapacity = req.body.ssdCapacity
  const price = req.body.price
  const operatingSystem = req.body.operatingSystem
  const warranty = req.body.warranty
  const features = req.body.features
  const imageURL = req.body.imageURL
  const userName = req.body.userName
  const input = {
    brand: brand,
    model: model,
    category: category,
    screenSize: screenSize,
    screenResolution: screenResolution,
    cpuFamily: cpuFamily,
    memorySize: memorySize,
    ssdCapacity: ssdCapacity,
    price: price,
    operatingSystem: operatingSystem,
    warranty: warranty,
    features: features,
    imageURL: imageURL,
    userName: userName,
  }
  laptopService
    .createLaptop(input)
    .then((newLaptop) => res.status(200).json({ newLaptop }))
    .catch((error) => res.status(500).json({ error }))
}

export const getLaptop = (req: Request, res: Response, next: NextFunction) => {
  const laptopId = req.params.laptopId
  laptopService
    .getLaptop(laptopId)
    .then((laptop) => res.status(200).json({ laptop }))
    .catch((error) => res.status(500).json({ error }))
}

export const getAllLaptops = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  laptopService
    .getAllLaptops()
    .then((laptops) => res.status(200).json({ laptops }))
    .catch((error) => res.status(500).json({ error }))
}

export const updateLaptop = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const laptopId = req.params.laptopId
  const brand = req.body.brand
  const model = req.body.model
  const category = req.body.category
  const cpuFamily = req.body.cpuFamily
  const memorySize = parseInt(req.body.memorySize)
  const screenSize = parseInt(req.body.screenSize)
  const screenResolution = req.body.screenResolution
  const ssdCapacity = parseInt(req.body.ssdCapacity)
  const operatingSystem = req.body.operatingSystem
  const warranty = req.body.warranty
  const features = req.body.features
  const price = parseInt(req.body.price)
  const imageURL = req.body.imageURL
  const userName = req.body.userName
  const input = {
    brand: brand,
    model: model,
    category: category,
    screenSize: screenSize,
    screenResolution: screenResolution,
    cpuFamily: cpuFamily,
    memorySize: memorySize,
    ssdCapacity: ssdCapacity,
    price: price,
    operatingSystem: operatingSystem,
    warranty: warranty,
    features: features,
    imageURL: imageURL,
    userName: userName,
  }
  laptopService
    .updateLaptop(laptopId, input)
    .then((laptop) => res.status(200).json({ laptop }))
    .catch((error) => res.status(500).json({ error }))
}

export const deleteLaptop = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const laptopId = req.params.laptopId
  laptopService
    .deleteLaptop(laptopId)
    .then((message) => res.status(200).json({ message }))
    .catch((error) => res.status(500).json({ error }))
}
