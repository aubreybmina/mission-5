import TestimonialTile from './TestimonialTile'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { ITestimonial } from '../types/Interfaces'

const LaptopList = () => {
  const testimonails: ITestimonial[] = [
    {
      testimonial: `"Saad Malik was most helpful in suggesting and alternate product when
        the ordered product was..."`,
      name: `AidanD48`,
      date: `01/06/23`,
    },
    {
      testimonial: `"Saad Malik was most helpful in suggesting ..."`,
      name: `AidanD48`,
      date: `01/06/23`,
    },
  ]
  return (
    <div className="testimonial">
      <p>
        <FontAwesomeIcon icon={faQuoteLeft} />
        {` Customer Testimonials -`}
        <Link to="/"> See More</Link>
      </p>
      <div className="testimonial__tiles">
        <TestimonialTile />
      </div>
    </div>
  )
}

export default LaptopList
