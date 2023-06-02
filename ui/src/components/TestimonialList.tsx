import TestimonialTile from './TestimonialTile'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const LaptopList = () => {
  return (
    <div className="testimonial">
      <h3>
        <FontAwesomeIcon icon={faQuoteLeft} />
        {` Customer Testimonials -`}
        <Link to="/"> See More</Link>
      </h3>

      <TestimonialTile />
    </div>
  )
}

export default LaptopList
