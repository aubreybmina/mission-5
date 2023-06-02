import { menuArray } from '../assets/data/menuArray'
import { useState } from 'react'
import menuLaptop from '../assets/images/menuLaptop.png'
import menuPC from '../assets/images/menuPC.png'

export default function BurgerMenu() {
  const [popOut, setPopOut] = useState(false)

  const openPopOut = () => {
    setPopOut(true)
  }

  const closePopOut = () => {
    setPopOut(false)
  }

  return (
    <div className="burgerMenu">
      <div className="burgermenu__left">
        {menuArray.map(function (menu, index: number) {
          const isFirstOption = index === 0
          const eventHandlers = isFirstOption
            ? { onMouseEnter: openPopOut, onMouseLeave: closePopOut }
            : {}
          return (
            <div
              key={menu.id}
              className="burgerMenu__left--options"
              {...eventHandlers}
            >
              <menu.icon />
              <p>{menu.option}</p>
            </div>
          )
        })}
      </div>
      {popOut ? (
        <div
          className="burgerMenu__right"
          onMouseEnter={openPopOut}
          onMouseLeave={closePopOut}
        >
          <div className="burgerMenu__right--upper">
            <div className="burgerMenu__tile">
              <div>
                <img
                  className="burgerMenu__tile--image"
                  src={menuLaptop}
                  alt="laptop"
                />
                <p className="burgerMenu__tile--text">Laptops</p>
              </div>
            </div>
            <div className="burgerMenu__tile">
              <div>
                <img
                  className="burgerMenu__tile--image"
                  src={menuPC}
                  alt="PC"
                />
                <p className="burgerMenu__tile--text">Desktop PCs</p>
              </div>
            </div>
          </div>
          <div className="burgerMenu__right--lower">
            <div className="burgerMenu__right--lower_left">
              <h3 className="menuHeader">Computers & Tablets</h3>
              <p className="menuText">All-in-One PCs</p>
              <p className="menuText">Barebones PCs</p>
              <p className="menuText">Desktop PCs</p>
              <p className="menuText">eReaders</p>
              <p className="menuText">Industrial PCs and IoT</p>
              <p className="menuText">Laptops</p>
              <p className="menuText">Off-Lease PCs</p>
              <p className="menuText">Servers</p>
              <p className="menuText">Single Board Computers</p>
              <p className="menuText">Tablets</p>
              <p className="menuText">Thin/Zero Clients</p>
            </div>
            <div className="burgerMenu__right--lower_right">
              <h3 className="menuHeader">Accesories</h3>
              <p className="menuText">AC Power Adapters</p>
              <p className="menuText">Device Charging Stations</p>
              <p className="menuText">Docking Stations</p>
              <p className="menuText">Laptop Bags/Cases</p>
              <p className="menuText">Other Laptop Accessories</p>
              <p className="menuText">Other Tablet Accesories</p>
              <p className="menuText">Server Accessories</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
