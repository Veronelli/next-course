// Oh you curious...
// This is not a real database,
// But let's imagine it is one :)
import allData from './data'

class Database {
  constructor() {}

  async getAll(): Promise<any[]> {
    const asArray = allData
    await randomDelay()
    return asArray
  }

  async getById(id: string): Promise<any | null> {
    const existProduct = allData.some(product=>product.id === id)
    if (!existProduct) {
      return null
    }

    const entry = allData.find(product=>product.id == id)
    await randomDelay()
    return entry
  }
}

// Let's also add a delay to make it a bit closer to reality
const randomDelay = () =>
  new Promise((resolve) => {
    const max = 350
    const min = 100
    const delay = Math.floor(Math.random() * (max - min + 1)) + min

    setTimeout(resolve, delay)
  })

export default Database
