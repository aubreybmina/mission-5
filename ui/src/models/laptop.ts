export interface Laptop {
  _id: string
  brand: string
  model: string
  category: string
  cpuFamily: string
  memorySize: number
  screenSize: number
  screenResolution: string
  ssdCapacity: number
  operatingSystem: string
  warranty: string
  features: string
  price: number
  special: boolean
  imageURL: string
  userName: {
    _id: string
    firstName: string
    lastName: string
    userName: string
  }
  createdAt: string
  updatedAt: string
}
