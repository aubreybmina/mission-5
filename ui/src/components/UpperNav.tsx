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
        <p className="upperNav__mainBtns--text">Hardwired</p>
        <p className="upperNav__mainBtns--text">PB Business</p>
        <p className="upperNav__mainBtns--text">PB Education</p>
        <p className="upperNav__mainBtns--text">PB Wholesale</p>
        <p className="upperNav__mainBtns--text">PB Government</p>
        <p className="upperNav__mainBtns--text">PB Health</p>
        <p className="upperNav__mainBtns--text">PB IoT</p>
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
