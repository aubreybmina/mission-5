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
} from '@fortawesome/free-solid-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons'

const FooterSiteLinks = () => {
  return (
    <div className="sitelinks">
      <div className="sitelinks__section">
        <div className="sitelinks__section--department">
          <div className="sitelinks__section--title">Shop by DEPARTMENT</div>
          <div className="sitelinks__section--department--list">
            <ul className="sitelinks__section--department--list-ul">
              <li className="sitelinks__section--department--list-li">
                <FontAwesomeIcon className="sitelinks--icon" icon={faLaptop} />
                Computers & Tables
              </li>
              <li className="sitelinks__section--department--list-li">
                <FontAwesomeIcon className="sitelinks--icon" icon={faDesktop} />
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
                <FontAwesomeIcon className="sitelinks--icon" icon={faMobile} />
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
                <FontAwesomeIcon className="sitelinks--icon" icon={faGamepad} />
                Gaming
              </li>
              <li className="sitelinks__section--department--list-li">
                <FontAwesomeIcon className="sitelinks--icon" icon={faCamera} />
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
              <li className="sitelinks__section--company--list-li">Lorem</li>
              <li className="sitelinks__section--company--list-li">Ipsum</li>
              <li className="sitelinks__section--company--list-li">Dolor</li>
            </ul>
          </div>
        </div>
        <div className="sitelinks__section--company">
          <div className="sitelinks__section--title">Services & Support</div>
          <div className="sitelinks__section--company--list">
            <ul className="sitelinks__section--company--list-ul">
              <li className="sitelinks__section--company--list-li">Lorem</li>
              <li className="sitelinks__section--company--list-li">Ipsum</li>
              <li className="sitelinks__section--company--list-li">Dolor</li>
            </ul>
          </div>
        </div>
        <div className="sitelinks__section--company">
          <div className="sitelinks__section--title">Promotions & Offers</div>
          <div className="sitelinks__section--company--list">
            <ul className="sitelinks__section--company--list-ul">
              <li className="sitelinks__section--company--list-li">Lorem</li>
              <li className="sitelinks__section--company--list-li">Ipsum</li>
              <li className="sitelinks__section--company--list-li">Dolor</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sitelinks__section">
        <div className="sitelinks__section--title">Become a PB Insider</div>
      </div>
    </div>
  )
}

export default FooterSiteLinks
