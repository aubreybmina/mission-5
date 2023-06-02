import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'

export default function UpperNav() {
  return (
    <div className="upperNav">
      <div className="upperNav__homeBtn">
        <Link to="/" className="upperNav__homeBtn--link">
          <p>PB Tech</p>
        </Link>
      </div>
      <div className="upperNav__mainBtns">
        <p>Hardwired</p>
        <p>PB Business</p>
        <p>PB Education</p>
        <p>PB Wholesale</p>
        <p>PB Government</p>
        <p>PB Health</p>
        <p>PB IoT</p>
      </div>
      <div className="upperNav__appBtn">
        <FontAwesomeIcon
          className="upperNav__appBtn--mobileIcon"
          icon={faMobileScreenButton}
        />
        <p>Get the PB Tech App</p>
      </div>
    </div>
  )
}
