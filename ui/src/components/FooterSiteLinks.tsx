import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLaptop,
  faDesktop,
  faHardDrive,
  faWifi,
  faPrint,
  faMobile,
  faTv,
  faHeadphones,
  faGamepad,
  faCamera,
  faKey,
  faRobot,
  faGift,
  faPlus,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons'
import {
  faAndroid,
  faApple,
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare,
  faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons'
import insiderlogo from '../assets/images/insider-logo.png'

const FooterSiteLinks = () => {
  const images = require.context(
    '../assets/images/footerlogo',
    true,
    /\.(png|ico|svg|jpg|gif|webp)$/
  )
  const imageList = images.keys().map((image: string) => images(image))

  return (
    <div className="sitelinks">
      <div className="sitelinks__top">
        <div className="sitelinks__section">
          <div className="sitelinks__section--department">
            <div className="sitelinks__section--title">Shop by DEPARTMENT</div>
            <div className="sitelinks__section--department--list">
              <ul className="sitelinks__section--department--list-ul">
                <li className="sitelinks__section--department--list-li">
                  <FontAwesomeIcon
                    className="sitelinks--icon"
                    icon={faLaptop}
                  />
                  Computers & Tables
                </li>
                <li className="sitelinks__section--department--list-li">
                  <FontAwesomeIcon
                    className="sitelinks--icon"
                    icon={faDesktop}
                  />
                  PC Peripherals & Accessories
                </li>
                <li className="sitelinks__section--department--list-li">
                  <FontAwesomeIcon
                    className="sitelinks--icon"
                    icon={faHardDrive}
                  />
                  PC Parts
                </li>
                <li className="sitelinks__section--department--list-li">
                  <FontAwesomeIcon className="sitelinks--icon" icon={faWifi} />
                  Networking
                </li>
                <li className="sitelinks__section--department--list-li">
                  <FontAwesomeIcon className="sitelinks--icon" icon={faPrint} />
                  Printing & Office
                </li>
                <li className="sitelinks__section--department--list-li">
                  <FontAwesomeIcon
                    className="sitelinks--icon"
                    icon={faMobile}
                  />
                  Phones & Accessories
                </li>
                <li className="sitelinks__section--department--list-li">
                  <FontAwesomeIcon className="sitelinks--icon" icon={faTv} />
                  TV & AV
                </li>
                <li className="sitelinks__section--department--list-li">
                  <FontAwesomeIcon
                    className="sitelinks--icon"
                    icon={faHeadphones}
                  />
                  Headphones & Audio
                </li>
                <li className="sitelinks__section--department--list-li">
                  <FontAwesomeIcon
                    className="sitelinks--icon"
                    icon={faGamepad}
                  />
                  Gaming
                </li>
                <li className="sitelinks__section--department--list-li">
                  <FontAwesomeIcon
                    className="sitelinks--icon"
                    icon={faCamera}
                  />
                  Cameras & Drones
                </li>
                <li className="sitelinks__section--department--list-li">
                  <FontAwesomeIcon className="sitelinks--icon" icon={faKey} />
                  Smart Home & Security
                </li>
                <li className="sitelinks__section--department--list-li">
                  <FontAwesomeIcon className="sitelinks--icon" icon={faRobot} />
                  Toys, Hobbies & STEM
                </li>
                <li className="sitelinks__section--department--list-li">
                  <FontAwesomeIcon className="sitelinks--icon" icon={faGift} />
                  Gift Ideas
                </li>
                <li className="sitelinks__section--department--list-li">
                  <FontAwesomeIcon className="sitelinks--icon" icon={faApple} />
                  Apple
                </li>

                <li className="sitelinks__section--department--list-li">
                  <FontAwesomeIcon className="sitelinks--icon" icon={faPlus} />
                  More
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sitelinks__section">
          <div className="sitelinks__section--company">
            <div className="sitelinks__section--title">Company Info</div>
            <div className="sitelinks__section--company--list">
              <ul className="sitelinks__section--company--list-ul">
                <li className="sitelinks__section--company--list-li">
                  About Us
                </li>
                <li className="sitelinks__section--company--list-li">
                  Business
                </li>
                <li className="sitelinks__section--company--list-li">
                  Education
                </li>
                <li className="sitelinks__section--company--list-li">
                  Wholesale
                </li>
                <li className="sitelinks__section--company--list-li">
                  Government
                </li>
                <li className="sitelinks__section--company--list-li">Health</li>
                <li className="sitelinks__section--company--list-li">Stores</li>
                <li className="sitelinks__section--company--list-li">
                  Careers
                </li>
                <li className="sitelinks__section--company--list-li">
                  Contact Us
                </li>
                <li className="sitelinks__section--company--list-li">News</li>
                <li className="sitelinks__section--company--list-li">
                  Terms & Conditions
                </li>
                <li className="sitelinks__section--company--list-li">
                  Privacy Policy
                </li>
              </ul>
            </div>
          </div>
          <div className="sitelinks__section--company">
            <div className="sitelinks__section--title">Services & Support</div>
            <div className="sitelinks__section--company--list">
              <ul className="sitelinks__section--company--list-ul">
                <li className="sitelinks__section--company--list-li">Help</li>
                <li className="sitelinks__section--company--list-li">
                  Returns & Warranty
                </li>
                <li className="sitelinks__section--company--list-li">
                  Finance
                </li>
                <li className="sitelinks__section--company--list-li">
                  IT Services
                </li>
                <li className="sitelinks__section--company--list-li">
                  Home Services
                </li>
                <li className="sitelinks__section--company--list-li">
                  Repair Services
                </li>
                <li className="sitelinks__section--company--list-li">
                  Job Tracker
                </li>
                <li className="sitelinks__section--company--list-li">
                  Service Parts
                </li>
                <li className="sitelinks__section--company--list-li">
                  System Builder
                </li>
              </ul>
            </div>
          </div>
          <div className="sitelinks__section--company">
            <div className="sitelinks__section--title">Promotions & Offers</div>
            <div className="sitelinks__section--company--list">
              <ul className="sitelinks__section--company--list-ul">
                <li className="sitelinks__section--company--list-li">
                  Promotions
                </li>
                <li className="sitelinks__section--company--list-li">
                  Clearance
                </li>
                <li className="sitelinks__section--company--list-li">
                  Hot Deals
                </li>
                <li className="sitelinks__section--company--list-li">
                  New Arrivals
                </li>
                <li className="sitelinks__section--company--list-li">BYOD</li>
                <li className="sitelinks__section--company--list-li">
                  Tax Free Shopping
                </li>
                <li className="sitelinks__section--company--list-li">Events</li>
                <li className="sitelinks__section--company--list-li">
                  PB Insider
                </li>
                <li className="sitelinks__section--company--list-li">
                  PB Advisor
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sitelinks__section">
          <div className="sitelinks__section--insider">
            <div className="sitelinks__section--title">Become a PB Insider</div>

            <div className="sitelinks__section--insider--details">
              <div className="sitelinks__section--insider--details--content">
                <img src={insiderlogo} alt="PB Insider Logo" />
                <p>
                  Get early access to sales, exclusive discount coupons & more!
                </p>
              </div>
              <button className="sitelinks__section--insider--button">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sitelinks__bottom">
        <div className="sitelinks__section">
          <div className="sitelinks__section--pay">
            {imageList.map((image: string, index: number) => (
              <img key={index} src={image} alt={`image-${index}`} />
            ))}
          </div>
        </div>
        <div className="sitelinks__section">
          <div className="sitelinks__section--country">
            <FontAwesomeIcon
              className="sitelinks__section--country--icon"
              icon={faGlobe}
            />
            Countries:
            <span>
              <a href="https://www.pbtech.co.nz/">New Zealand</a> •
              <a href="https://www.pbtech.com/au/">Australia</a> •
              <a href="https://www.pbtech.com/pacific/">Pacific</a> •
              <a href="https://www.pbtech.com/">Global</a>
            </span>
          </div>
        </div>

        <div className="sitelinks__section">
          <div className="sitelinks__section--download">
            Download our app:
            <FontAwesomeIcon
              className="sitelinks__section--download--icon"
              icon={faApple}
            />
            <FontAwesomeIcon
              className="sitelinks__section--download--icon"
              icon={faAndroid}
            />
          </div>
        </div>

        <div className="sitelinks__section">
          <div className="sitelinks__section--socials">
            <FontAwesomeIcon
              className="sitelinks__section--socials--icon sitelinks__fb"
              icon={faFacebookSquare}
            />
            <FontAwesomeIcon
              className="sitelinks__section--socials--icon sitelinks__twitter"
              icon={faTwitterSquare}
            />
            <FontAwesomeIcon
              className="sitelinks__section--socials--icon  sitelinks__yt"
              icon={faYoutubeSquare}
            />
            <FontAwesomeIcon
              className="sitelinks__section--socials--icon  sitelinks__ig"
              icon={faInstagramSquare}
            />
            <FontAwesomeIcon
              className="sitelinks__section--socials--icon  sitelinks__linkedin"
              icon={faLinkedin}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterSiteLinks
