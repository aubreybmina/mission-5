import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Laptop as LaptopModel } from '../../models/laptop'

const LaptopPage = () => {
  const { id } = useParams()
  const [laptop, setLaptop] = useState<LaptopModel[]>([])

  useEffect(() => {
    async function loadLaptop() {
      try {
        const response = await fetch(`/api/laptop/${id}`, {
          method: 'GET',
        })
        const result = await response.json()
        setLaptop(result)
      } catch (error) {
        console.log(error)
      }
    }
    loadLaptop()
  }, [])
  return (
    <div className="products">
      <h3>Laptop details here: {JSON.stringify(laptop)}</h3>
    </div>
  )
}

export default LaptopPage
