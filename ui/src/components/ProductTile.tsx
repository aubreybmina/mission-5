import React from 'react'
import { LaptopProps } from '../types/Interfaces'

const ProductTile = ({ laptop }: LaptopProps) => {
  const { imageURL, brand, model, category, cpuFamily, price } = laptop
  const formatter = new Intl.NumberFormat('en-NZ', {
    style: 'currency',
    currency: 'NZD',
  })

  return (
    <>
      <div className="products__card">
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
        </div>
        <div className="products__card--text">
          <p>{`${brand} ${model} ${category} Laptop ${cpuFamily}`}</p>
          <p>{formatter.format(price)}</p>
        </div>
      </div>
    </>
  )
}

export default ProductTile
