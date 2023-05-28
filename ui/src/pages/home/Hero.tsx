import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__taglinecontainer">
        <h1>Property Management Auckland</h1>
        <p>
          Helping clients to achieve harmony through our expertise and skills
        </p>
      </div>
      <div className="hero__searchcontainer">
        <form className="hero__searchcontainer--form">
          <input type="text" name="search" placeholder="Search by address" />
          <button type="submit">
            <FaSearch /> Search
          </button>
        </form>
      </div>
    </div>
  )
}

export default Hero
