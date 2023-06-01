import { useEffect, useState } from 'react'
import { Laptop as LaptopModel } from '../../models/laptop'
import ProductTile from '../../components/ProductTile'
import { Link } from 'react-router-dom'

const LaptopList = () => {
  const [laptops, setLaptops] = useState<LaptopModel[]>([])

  useEffect(() => {
    async function loadLaptops() {
      try {
        const response = await fetch('/api/laptop', {
          method: 'GET',
        })
        const laptops = await response.json()
        setLaptops(laptops.laptops)
      } catch (error) {
        console.log(error)
      }
    }
    loadLaptops()
  }, [])
  return (
    <>
      {laptops?.length > 0 ? (
        <div className="products">
          {laptops.map((laptop) => (
            <ProductTile key={laptop._id} laptop={laptop} />
          ))}
        </div>
      ) : (
        <div className="missing">
          <div className="missing__taglinecontainer">
            <h1>No Laptop Found</h1>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to="/">Visit Our Homepage</Link>
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default LaptopList
