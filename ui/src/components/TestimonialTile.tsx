import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

const TestimonialTile = () => {
  return (
    <>
      <div className="testimonial__card">
        <div className="testimonial__card--text">
          <h3 className="testimonial__card--text--productName">
            Some text here
          </h3>
          <h6 className="testimonial__card--text--normalPriceLabel">
            PB Tech Price
          </h6>
          <h1 className="testimonial__card--text--priceDollar">$5454</h1>
          <FontAwesomeIcon icon={faFlag} />
        </div>
      </div>
      <div className="testimonial__card">
        <div className="testimonial__card--text">
          <h3 className="testimonial__card--text--productName">
            Some text here
          </h3>
          <h6 className="testimonial__card--text--normalPriceLabel">
            PB Tech Price
          </h6>
          <h1 className="testimonial__card--text--priceDollar">$5454</h1>
          <FontAwesomeIcon icon={faFlag} />
        </div>
      </div>
    </>
  )
}

export default TestimonialTile
