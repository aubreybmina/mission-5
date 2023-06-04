import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon'
import { Link } from 'react-router-dom'

export default function CategoryButtons() {
  const typeArray = [
    'Business Laptops',
    'Home & Study Laptops',
    'Gaming Laptops',
    'Thin & Light Laptops',
    '2-in-1 / Flip Laptops',
    'Chromebooks',
    'Mobile Workstations',
    'Off-Lease Laptops',
  ]
  const sizeArray = [
    'Compact (Less than 13")',
    'Small (13"-14.9")',
    'Medium (15"-15.6")',
    'Large (17.3" and above)',
  ]
  const OsArray = ['Microsoft Windows', 'Apple macOS', 'Google Chrome']
  return (
    <>
      <div className="laptopType">
        <h3 className="header">Shop by Laptop Type</h3>
        <div className="header__button">
          <p>Shop all Laptops</p>
          <ArrowRightLineIcon />
        </div>
      </div>
      <div className="laptopType__container">
        {typeArray.map(function (type, index: number) {
          if (index === 0) {
            return (
              <Link
                to="business-laptops"
                className="laptopType__container--buttons"
              >
                <div key={index}>
                  <p>{type}</p>
                </div>
              </Link>
            )
          } else {
            return (
              <div key={index} className="laptopType__container--buttons">
                <p>{type}</p>
              </div>
            )
          }
        })}
      </div>
      <div className="screenSize">
        <h3 className="header">Shop by Screen Size</h3>
        <div className="header__button">
          <p>Shop all Laptops</p>
          <ArrowRightLineIcon />
        </div>
      </div>
      <div className="screenSize__container">
        {sizeArray.map(function (size, index: number) {
          return (
            <div key={index} className="screenSize__container--buttons">
              <p>{size}</p>
            </div>
          )
        })}
      </div>
      <div className="operatingSystem">
        <h3 className="header">Shop by Operating System</h3>
        <div className="header__button">
          <p>Shop all Laptops</p>
          <ArrowRightLineIcon />
        </div>
      </div>
      <div className="operatingSystem__container">
        {OsArray.map(function (Os, index: number) {
          return (
            <div key={index} className="operatingSystem__container--buttons">
              <p>{Os}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
