import express from 'express'
import {
  getAllLaptops,
  createLaptop,
  getLaptop,
  updateLaptop,
  deleteLaptop,
} from '../controller/laptopController'

const laptopRouter = express.Router()

laptopRouter.get('/', getAllLaptops)
laptopRouter.post('/', createLaptop)
laptopRouter.get('/:laptopId', getLaptop)
laptopRouter.put('/:laptopId', updateLaptop)
laptopRouter.delete('/:laptopId', deleteLaptop)

export default laptopRouter
