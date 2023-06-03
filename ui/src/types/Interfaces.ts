import { Laptop as LaptopModel } from '../models/laptop'

export interface LaptopProps {
  laptop: LaptopModel
}

export interface ITestimonial {
  id: string
  testimonial: string
  name: string
  date: string
}
