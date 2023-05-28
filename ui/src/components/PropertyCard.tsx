import React from 'react'
import { FaBed, FaBath, FaCar } from 'react-icons/fa'

const PropertyCard = () => {
  const formatter = new Intl.NumberFormat('en-NZ', {
    style: 'currency',
    currency: 'NZD',
  })
  return (
    <>
      <div className="properties">
        <div className="properties__card">
          <div className="properties__card--image">
            <img
              className="properties__card--photo"
              src="http://images.getpalace.com/0a5da261-d63d-43bf-8b11-c8590634b64a/RBPI005257.jpg"
            />
          </div>
          <div className="properties__card--text">
            <p>44 Monarch Avenue, Hillcrest, Auckland, 0627</p>
            <FaBed /> 4 <FaBath /> 1 <FaCar /> 2
            <p>{formatter.format(1050)} Per Week</p>
          </div>
        </div>

        <div className="properties__card">
          <div className="properties__card--image">
            <img
              className="properties__card--photo"
              src="http://images.getpalace.com/0a5da261-d63d-43bf-8b11-c8590634b64a/RBPI005257.jpg"
            />
          </div>
          <div className="properties__card--text">
            <p>44 Monarch Avenue, Hillcrest, Auckland, 0627</p>
            <FaBed /> 4 <FaBath /> 1 <FaCar /> 2
            <p>{formatter.format(1050)} Per Week</p>
          </div>
        </div>

        <div className="properties__card">
          <div className="properties__card--image">
            <img
              className="properties__card--photo"
              src="http://images.getpalace.com/0a5da261-d63d-43bf-8b11-c8590634b64a/RBPI005257.jpg"
            />
          </div>
          <div className="properties__card--text">
            <p>44 Monarch Avenue, Hillcrest, Auckland, 0627</p>
            <FaBed /> 4 <FaBath /> 1 <FaCar /> 2
            <p>{formatter.format(1050)} Per Week</p>
          </div>
        </div>

        <div className="properties__card">
          <div className="properties__card--image">
            <img
              className="properties__card--photo"
              src="http://images.getpalace.com/0a5da261-d63d-43bf-8b11-c8590634b64a/RBPI005257.jpg"
            />
          </div>
          <div className="properties__card--text">
            <p>44 Monarch Avenue, Hillcrest, Auckland, 0627</p>
            <FaBed /> 4 <FaBath /> 1 <FaCar /> 2
            <p>{formatter.format(1050)} Per Week</p>
          </div>
        </div>

        <div className="properties__card">
          <div className="properties__card--image">
            <img
              className="properties__card--photo"
              src="http://images.getpalace.com/0a5da261-d63d-43bf-8b11-c8590634b64a/RBPI005257.jpg"
            />
          </div>
          <div className="properties__card--text">
            <p>44 Monarch Avenue, Hillcrest, Auckland, 0627</p>
            <FaBed /> 4 <FaBath /> 1 <FaCar /> 2
            <p>{formatter.format(1050)} Per Week</p>
          </div>
        </div>

        <div className="properties__card">
          <div className="properties__card--image">
            <img
              className="properties__card--photo"
              src="http://images.getpalace.com/0a5da261-d63d-43bf-8b11-c8590634b64a/RBPI005257.jpg"
            />
          </div>
          <div className="properties__card--text">
            <p>44 Monarch Avenue, Hillcrest, Auckland, 0627</p>
            <FaBed /> 4 <FaBath /> 1 <FaCar /> 2
            <p>{formatter.format(1050)} Per Week</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PropertyCard
