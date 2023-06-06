import { useEffect, useState } from 'react'
import { Laptop as LaptopModel } from '../../models/laptop'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'
import Carousel from '../home/Carousel'
import DropDown from '../businessLaptops/DropDown'
import { stores } from '../../assets/data/storesArray'
import { Link } from 'react-router-dom'

const BusinessLaptops: React.FC = () => {
  const [laptops, setLaptops] = useState<LaptopModel[]>([])
  const [rangeValue, setRangeValue] = useState(4000)
  const [selectedSortOption, setSelectedSortOption] = useState('')

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

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value)
    setRangeValue(value)
  }

  const handleSortChange = (option: string) => {
    setSelectedSortOption(option)
  }

  const sortedLaptops = [...laptops]

  switch (selectedSortOption) {
    case 'Highest Price':
      sortedLaptops.sort((a, b) => b.price - a.price)
      break
    case 'Lowest Price':
      sortedLaptops.sort((a, b) => a.price - b.price)
      break
    default:
      break
  }

  const price = ['Special Price!', 'PB Tech Price']

  const options = [
    {
      value: 'Most Popular',
      label: 'Most Popular',
    },
    {
      value: 'Lowest Price',
      label: 'Lowest Price',
    },
    {
      value: 'Highest Price',
      label: 'Highest Price',
    },
    {
      value: 'Name',
      label: 'Name',
    },
    {
      value: 'Best Rating',
      label: 'Best Rating',
    },
    {
      value: 'Most Reviews',
      label: 'Most Reviews',
    },
    {
      value: 'Newest Items',
      label: 'Newest Items',
    },
    {
      value: 'PB Part #',
      label: 'PB Part #',
    },
    {
      value: 'Most Stock',
      label: 'Most Stock',
    },
  ]

  return (
    <>
      <div className="businessLaptops">
        <div className="filterBlock">
          <div className="filterBlock__store">
            <p>Select Your PB Tech Store</p>
            <DropDown
              placeHolder="Select Store"
              options={stores}
              onSortChange={handleSortChange}
            />
          </div>
          <div className="filterBlock__shipping">
            <p>Shipping / Click & Collect</p>
            <div>
              <input type="radio" name="shipping" />
              <label>Show All</label>
            </div>
            <div>
              <input type="radio" name="shipping" />
              <label>Ships within 1 working day</label>
            </div>
            <div>
              <input type="radio" name="shipping" />
              <label>Click & Collect today</label>
            </div>
          </div>
          <div className="filterBlock__price">
            <p>Price (inc GST)</p>
            <input
              type="range"
              min={500}
              max={9698.18}
              step={1}
              value={rangeValue}
              onChange={handleRangeChange}
            />
            <p>${rangeValue.toFixed(2)}</p>
          </div>
        </div>
        <div className="upperBlock">
          <div className="upperBlock__breadcrumbs">
            <p>Home</p>
            <ArrowRightSLineIcon />
            <p>Computers & Tablets</p>
            <ArrowRightSLineIcon />
            <p>Laptops</p>
            <ArrowRightSLineIcon />
            <p className="upperBlock__breadcrumbs--current">Business Laptops</p>
          </div>
          <h2 className="upperBlock__mainHead">Business Laptops</h2>
        </div>
      </div>
      <Carousel />
      <div className="sortBar">
        <p className="sortBar__text">Sort By</p>
        <DropDown
          placeHolder="Select..."
          options={options}
          onSortChange={handleSortChange}
        />
      </div>
      <div className="businessList__container">
        {sortedLaptops
          .filter(
            (laptop) =>
              laptop.category === 'Business' && laptop.price <= rangeValue
          )
          .map((laptop) => (
            <div className="businessList__container--tiles">
              <img
                className="businessList__container--tiles_img"
                src={laptop.imageURL}
                alt="laptop image"
              />
              <div className="businessList__container--tiles_text">
                <Link to={`laptop/${laptop._id}`}>
                  <p>
                    {laptop.brand} {laptop.model}
                  </p>
                </Link>
                {laptop.special ? (
                  <p className="businessList__container--tiles_special">
                    {price[0]}
                  </p>
                ) : (
                  <p className="businessList__container--tiles_noSpecial">
                    {price[1]}
                  </p>
                )}
                <div className="businessList__container--price_dollars">
                  <p className="businessList__container--price_dollars">
                    ${Math.floor(laptop.price).toLocaleString()}
                    <span className="businessList__container--price_cents">
                      {(laptop.price % 1).toFixed(2).slice(2)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

export default BusinessLaptops
