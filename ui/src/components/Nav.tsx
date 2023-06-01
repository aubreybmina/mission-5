import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import logo from '../assets/images/pb-logo-alt.svg'
import { Link } from 'react-router-dom'

// const [burger, setBurger] = useState(false)

const Nav = () => {
  return (
    <nav>
      <div className="navbarMid">
        <div className="navbarMid__home">
          <a href="/" className="navbarMid__home--link">
            <img className="navbarMid__home--logo" src={logo} alt="PB Tech" />
          </a>
          <div className="navbarMid__search">
            <form>
              <input
                className="navbarMid__search--input"
                type="text"
                name="search"
                placeholder="Search by keywords or part #"
              />
              <button className="navbarMid__search--btn" type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
              </button>
            </form>
          </div>
          <div className="navbarMid__account">
            <div className="navbarMid__account--signin">
              <FontAwesomeIcon icon={faUser} size="lg" />
              <p>Sign In</p>
              <span style={{ color: '#0f70a5' }}>or</span>
              <p>Create Account</p>
            </div>
            <div className="navbarMid__account--wishlist">
              <FontAwesomeIcon icon={faHeart} size="lg" />
              <p>Wishlist</p>
            </div>
            <div className="navbarMid__account--cart">
              <FontAwesomeIcon icon={faCartShopping} size="lg" />
              <p className="navbarMid__account--cart--number">0</p>
            </div>
          </div>
        </div>
      </div>
      <div className="navbarLower">
        <div className="navbarLower__burger">
          <FontAwesomeIcon icon={faBars} size="lg" />
          <h3>Departments</h3>
        </div>
        <div className="navbarLower__dropdowns"></div>
        <div className="navbarLower__accountOptions"></div>
      </div>
    </nav>
  )
}

export default Nav
