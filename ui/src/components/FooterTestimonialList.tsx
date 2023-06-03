import TestimonialTile from './TestimonialTile'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const LaptopList = () => {
  return (
    <div className="testimonial">
      <div className="testimonial__title">
        <FontAwesomeIcon icon={faQuoteLeft} />
        {` Customer Testimonials -`}
        <Link to="/"> See More</Link>
      </div>
      <div className="testimonial__tiles">
        <TestimonialTile />
      </div>
    </div>
  )
}

export default LaptopList
