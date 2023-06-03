import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ShoppingCartLineIcon from 'remixicon-react/ShoppingCartLineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import HeartLineIcon from 'remixicon-react/HeartLineIcon'
import SearchLineIcon from 'remixicon-react/SearchLineIcon'
import ArrowDownSLineIcon from 'remixicon-react/ArrowDownSLineIcon'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/images/pb-logo-alt.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import BurgerMenu from './BurgerMenu'

const Nav = () => {
  const [burger, setBurger] = useState(false)
  const [account, setAccount] = useState(false)

  const openBurger = () => {
    setBurger(true)
  }

  const closeBurger = () => {
    setBurger(false)
  }

  const openAccount = () => {
    setAccount(true)
  }

  const closeAccount = () => {
    setAccount(false)
  }

  return (
    <nav>
      <div className="navbarMid">
        <div className="navbarMid__home">
          <Link to="/">
            <img className="navbarMid__home--logo" src={logo} alt="PB Tech" />
          </Link>
          <form className="navbarMid__search">
            <div className="navbarMid__search--wrapper">
              <input
                className="navbarMid__search--wrapper-input"
                type="text"
                name="search"
                placeholder="Search by keywords or part #"
              />
              <div className="navbarMid__search--wrapper-addon">
                <span>in All Departments</span>
                <ArrowDownSLineIcon color="#0d4f77" />
              </div>
            </div>
            <button className="navbarMid__search--btn" type="submit">
              <SearchLineIcon />
            </button>
          </form>
          <div className="navbarMid__account">
            <div className="navbarMid__account--cart">
              <ShoppingCartLineIcon />
            </div>
            <div className="navbarMid__account--wishlist">
              <HeartLineIcon />
            </div>
            <div
              className="navbarMid__account--signin"
              onMouseEnter={openAccount}
              onMouseLeave={closeAccount}
            >
              <UserLineIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="navbarLower">
        <div
          className="navbarLower__burger"
          onMouseEnter={openBurger}
          onMouseLeave={closeBurger}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
          <h3>Departments</h3>
        </div>
        <div className="navbarLower__dropdowns">
          <div className="navbarLower__dropdowns--chevrons">
            <div className="navbarLower__dropdowns--chevrons--1">
              <p>Brands</p>
              <ArrowDownSLineIcon />
            </div>
            <div className="navbarLower__dropdowns--chevrons--2">
              <p>Services</p>
              <ArrowDownSLineIcon />
            </div>
          </div>
          <p>Promos</p>
          <p>Deals</p>
          <p>New</p>
          <p>Tax Free</p>
        </div>
        <div className="navbarLower__contact">
          <p>Help</p>
          <p>Stores</p>
        </div>
      </div>
      <div>
        {burger ? (
          <div
            className="burgerMenu"
            onMouseEnter={openBurger}
            onMouseLeave={closeBurger}
          >
            <BurgerMenu />
          </div>
        ) : null}
      </div>
      <div>
        {account ? (
          <div
            className="accountMenu"
            onMouseEnter={openAccount}
            onMouseLeave={closeAccount}
          >
            <div className="accountMenu__upper">
              <button className="accountMenu__upper--register">Register</button>
              <button className="accountMenu__upper--signin">Sign In</button>
            </div>
            <div className="accountMenu__lower">
              <p className="accountMenu__lower--text">My Orders</p>
              <p className="accountMenu__lower--text">Returns</p>
              <p className="accountMenu__lower--text">Wish list</p>
              <p className="accountMenu__lower--text">Payment</p>
              <p className="accountMenu__lower--text">My Coupons</p>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  )
}

export default Nav
