import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LaptopProps } from '../types/Interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScaleBalanced, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const ProductTile = ({ laptop }: LaptopProps) => {
  const {
    _id,
    brand,
    model,
    category,
    screenSize,
    cpuFamily,
    memorySize,
    ssdCapacity,
    operatingSystem,
    warranty,
    features,
    price,
    imageURL,
  } = laptop
  const formatPrice = price.toFixed(2).toString().split('.')
  const whole = formatPrice[0]
  const cents = formatPrice[1]

  const [showAltDetails, setshowAltDetails] = useState(false)

  return (
    <>
      <div className="products__card">
        <Link to={`${_id}/${brand}-${model}-${screenSize}-${category}-Laptop`}>
          <div className="products__card--image">
            <img
              className="products__card--photo"
              src={
                imageURL !== 'N/A'
                  ? imageURL
                  : 'https://www.pbtech.co.nz/imgprod/N/B/NBKASU506040__1.jpg?h=2005533558'
              }
              alt={`${brand} ${model}`}
            />
            <div className="products__card--image--icons">
              <FontAwesomeIcon
                className="products__card--image--icons--scaleheart"
                icon={faScaleBalanced}
              />
              <FontAwesomeIcon
                className="products__card--image--icons--scaleheart"
                icon={faHeart}
              />
            </div>
          </div>
        </Link>
        <div
          className="products__card--text"
          onMouseEnter={() => setshowAltDetails(true)}
          onMouseLeave={() => setshowAltDetails(false)}
        >
          {showAltDetails === false ? (
            <>
              <h3 className="products__card--text--productName">{`${brand} ${model}`}</h3>
              <h6 className="products__card--text--normalPriceLabel">
                PB Tech Price
              </h6>
              <h1 className="products__card--text--priceDollar">${whole}</h1>
              <h6 className="products__card--text--priceCents">
                {cents || '00'}
              </h6>
            </>
          ) : (
            <>
              <h3 className="products__card--text--productName">{`${brand} ${model} ${screenSize} ${category} Laptop ${cpuFamily} ${memorySize}GB ${ssdCapacity}GB SSD ${operatingSystem} ${warranty} - ${features}`}</h3>
              <p className="products__card--text--shipping">
                <FontAwesomeIcon icon={faCheck} color="green" /> Ships today
              </p>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default ProductTile
