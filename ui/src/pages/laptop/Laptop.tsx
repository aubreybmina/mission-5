import { useEffect, useState } from 'react'
import { Laptop as LaptopModel } from '../../models/laptop'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'
import Carousel from '../home/Carousel'
import DropDown from '../businessLaptops/DropDown'
import { stores } from '../../assets/data/storesArray'
import { brands } from '../../assets/data/brandsArray'
import { cpu } from '../../assets/data/cpuArray'
import { Link } from 'react-router-dom'

const BusinessLaptops: React.FC = () => {
  const [laptops, setLaptops] = useState<LaptopModel[]>([])
  const [rangeValue, setRangeValue] = useState(4000)
  const [selectedSortOption, setSelectedSortOption] = useState('')
  const [showAltDetails, setshowAltDetails] = useState('')
  const [sliderStyle, setSliderStyle] = useState({})
  const [memSliderStyle, setMemSliderStyle] = useState({})
  const [selectedBrand, setSelectedBrand] = useState('All Brands')
  const [selectedCPU, setSelectedCPU] = useState('All')
  const [memRangeValue, setMemRangeValue] = useState(8)

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

  const handleMemRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value)
    setMemRangeValue(value)
  }

  useEffect(() => {
    const updateSliderStyle = () => {
      const maxValue = 9698
      const minValue = 500
      const colorLeft = '#0d4f77'
      const colorRight = '#d1eeff'

      const percent = ((rangeValue - minValue) / (maxValue - minValue)) * 100
      const gradientColor = `linear-gradient(to right, ${colorLeft} 0%, ${colorLeft} ${percent}%, ${colorRight} ${percent}%, ${colorRight} 100%)`

      setSliderStyle({
        background: gradientColor,
      })
    }

    updateSliderStyle()
  }, [rangeValue])

  useEffect(() => {
    const updateMemSliderStyle = () => {
      const maxValue = 64
      const minValue = 4
      const colorLeft = '#0d4f77'
      const colorRight = '#d1eeff'

      const percent = ((memRangeValue - minValue) / (maxValue - minValue)) * 100
      const gradientColor = `linear-gradient(to right, ${colorLeft} 0%, ${colorLeft} ${percent}%, ${colorRight} ${percent}%, ${colorRight} 100%)`

      setMemSliderStyle({
        background: gradientColor,
      })
    }

    updateMemSliderStyle()
  }, [memRangeValue])

  const handleSortChange = (option: string) => {
    setSelectedSortOption(option)
  }

  const handleBrandChange = (option: string) => {
    setSelectedBrand(option === 'All Brands' ? 'All Brands' : option)
  }

  const handleCPUChange = (option: string) => {
    setSelectedCPU(option === 'All' ? 'All' : option)
  }

  const sortedLaptops = [...laptops]

  switch (selectedSortOption) {
    case 'Highest Price':
      sortedLaptops.sort((a, b) => b.price - a.price)
      break
    case 'Lowest Price':
      sortedLaptops.sort((a, b) => a.price - b.price)
      break
    case 'On Special':
      sortedLaptops.sort((a, b) => Number(b.special) - Number(a.special))
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
      value: 'On Special',
      label: 'On Special',
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
            <div className="filterBlock__store--dropdown">
              <DropDown
                placeHolder="Select Store"
                options={stores}
                onSortChange={handleSortChange}
              />
            </div>
          </div>
          <div className="filterBlock__shipping">
            <p className="filterBlock__shipping--header">
              Shipping / Click & Collect
            </p>
            <div className="filterBlock__shipping--inputs">
              <input type="radio" name="shipping" />
              <label>Show All</label>
            </div>
            <div className="filterBlock__shipping--inputs">
              <input type="radio" name="shipping" />
              <label>Ships within 1 working day</label>
            </div>
            <div className="filterBlock__shipping--inputs">
              <input type="radio" name="shipping" />
              <label>Click & Collect today</label>
            </div>
          </div>
          <div className="filterBlock__price">
            <p className="filterBlock__price--header">Price (inc GST)</p>
            <input
              type="range"
              min={500}
              max={9698}
              step={1}
              value={rangeValue}
              onChange={handleRangeChange}
              style={sliderStyle}
            />
            <p className="filterBlock__price--text">${rangeValue.toFixed(2)}</p>
          </div>
          <div className="filterBlock__brands">
            <p className="filterBlock__brands--header">Brands</p>
            <div className="filterBlock__brands--dropdown">
              <DropDown
                placeHolder="All Brands"
                options={brands}
                onSortChange={handleBrandChange}
              />
            </div>
          </div>
          <div className="filterBlock__cpu">
            <p className="filterBlock__cpu--header">CPU Family</p>
            <div className="filterBlock__cpu--dropdown">
              <DropDown
                placeHolder="All"
                options={cpu}
                onSortChange={handleCPUChange}
              />
            </div>
          </div>
          <div className="filterBlock__memory">
            <p className="filterBlock__memory--header">Memory Size</p>
            <input
              type="range"
              min={4}
              max={64}
              step={4}
              value={memRangeValue}
              onChange={handleMemRangeChange}
              style={memSliderStyle}
            />
            <p className="filterBlock__memory--text">{memRangeValue} GB</p>
          </div>
          <div>
            <button className="filterBlock__showMore">Show More Filters</button>
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
              laptop.category === 'Business' &&
              laptop.price <= rangeValue &&
              (selectedBrand === 'All Brands' ||
                laptop.brand === selectedBrand) &&
              (selectedCPU === 'All' || laptop.cpuFamily === selectedCPU) &&
              laptop.memorySize <= memRangeValue
          )
          .map((laptop) => (
            <div
              className="businessList__container--tiles"
              onMouseEnter={() => setshowAltDetails(laptop._id)}
              onMouseLeave={() => setshowAltDetails('')}
            >
              <img
                className="businessList__container--tiles_img"
                src={laptop.imageURL}
                alt="laptop image"
              />
              <div className="businessList__container--tiles_text">
                {showAltDetails !== laptop._id ? (
                  <Link
                    to={`laptop/${laptop._id}`}
                    className="businessList__container--tiles_text_link"
                  >
                    <p>
                      {laptop.brand} {laptop.model}
                    </p>
                  </Link>
                ) : (
                  <Link
                    to={`laptop/${laptop._id}`}
                    className="businessList__container--tiles_text_link"
                  >
                    <p>
                      {`${laptop.brand} ${laptop.model} ${laptop.screenSize} ${laptop.category} Laptop ${laptop.cpuFamily} ${laptop.memorySize}GB ${laptop.ssdCapacity}GB SSD ${laptop.operatingSystem} ${laptop.warranty} - ${laptop.features}`}
                    </p>
                  </Link>
                )}
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
