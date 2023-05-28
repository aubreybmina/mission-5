import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import logo from '../assets/images/metronz_logo.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [showBars, setShowBars] = useState(true)
  const [showClose, setShowClose] = useState(false)
  const [showAltMenu, setshowAltMenu] = useState(false)

  const handleAltNav = () => {
    setShowBars(!showBars)
    setShowClose(!showClose)
    setshowAltMenu(!showAltMenu)
  }
  return (
    <nav className="navbar">
      <a href="/" className="navbar__menu--link">
        <img
          className="navbar__logo"
          src={logo}
          alt="Metro NZ Property Management"
        />{' '}
      </a>
      <div className="navbar__bars">
        {showBars === true ? (
          <FaBars className="navbar__bars--icon" onClick={handleAltNav} />
        ) : (
          <FaTimes className="navbar__bars--icon" onClick={handleAltNav} />
        )}
        {showAltMenu === true && (
          <div className="navbar__bars__container">
            <Link className="navbar__bars__container--link" to={`/`}>
              <p>Home</p>{' '}
            </Link>
            <Link className="navbar__bars__container--link" to={`/services`}>
              <p>Services</p>{' '}
            </Link>
            <Link className="navbar__bars__container--link" to={`/tenants`}>
              <p>Tenants</p>{' '}
            </Link>
            <Link className="navbar__bars__container--link" to={`/news`}>
              <p>News</p>{' '}
            </Link>
            <Link className="navbar__bars__container--link" to={`/about-us`}>
              <p>About us</p>{' '}
            </Link>
          </div>
        )}
      </div>
      <div className="navbar__menu">
        <Link className="navbar__menu--link" to={`/`}>
          <p>Home</p>
        </Link>
        <Link className="navbar__menu--link" to={`/services`}>
          <p>Services</p>
        </Link>
        <Link className="navbar__menu--link" to={`/properties`}>
          <p>Tenants</p>
        </Link>
        <Link className="navbar__menu--link" to={`/news`}>
          <p>News</p>
        </Link>
        <Link className="navbar__menu--link" to={`/about-us`}>
          <p>About us</p>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
