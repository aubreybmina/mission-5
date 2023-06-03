import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon'
import { useEffect, useState } from 'react'
import { Laptop as LaptopModel } from '../../models/laptop'

export default function CategoryTiles() {
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
      <div className="whatsHot">
        <h3 className="header">What's HOT right now</h3>
        <div className="header__button">
          <p>Shop all Laptops</p>
          <ArrowRightLineIcon />
        </div>
      </div>
      <div className="whatsHot__container">
        {laptops.slice(0, 3).map((laptop) => (
          <div className="whatsHot__container--tiles">
            <img
              className="whatsHot__container--tiles_img"
              src={laptop.imageURL}
              alt="laptop image"
            />
          </div>
        ))}
      </div>
      <div className="popBusiness">
        <h3 className="header">Popular Business Laptops</h3>
        <div className="header__button">
          <p>Shop all Business Laptops</p>
          <ArrowRightLineIcon />
        </div>
      </div>
      <div className="popGaming">
        <h3 className="header">Popular Gaming Laptops</h3>
        <div className="header__button">
          <p>Shop all Gaming Laptops</p>
          <ArrowRightLineIcon />
        </div>
      </div>
      <div className="laptopArticles">
        <h3 className="header">Check out the latest Laptop articles</h3>
        <div className="header__button">
          <p>View more</p>
          <ArrowRightLineIcon />
        </div>
      </div>
    </>
  )
}
