import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import logo from '../assets/images/pb-logo-alt.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar__menu">
        <a href="/" className="navbar__menu--link">
          <img className="navbar__menu--logo" src={logo} alt="PB Tech" />
        </a>
        <div className="navbar__search">
          <form>
            <input
              className="navbar__search--input"
              type="text"
              name="search"
              placeholder="Search by keywords or part #"
            />
            <button className="navbar__search--btn" type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Nav
