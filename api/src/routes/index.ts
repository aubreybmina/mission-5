import express from 'express'
import {
  getAllCars,
  addCar,
  getOneCar,
  updateCar,
  patchCar,
  deleteCar,
} from '../controller/carController'

const router = express.Router()
/*Routes for carController*/
router.get('/carvalue/', getAllCars)
router.post('/carvalue/', addCar)
router.get('/carvalue/:id', getOneCar)
router.put('/carvalue/:id', updateCar)
router.patch('/carvalue/:id', patchCar)
router.delete('/carvalue/:id', deleteCar)

export default router
