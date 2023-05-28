import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <div className="missing">
      <div className="missing__taglinecontainer">
        <h1>Page Not Found</h1>
        <p>Well, that's disappointing.</p>
        <p>
          <Link to="/">Visit Our Homepage</Link>
        </p>
      </div>
    </div>
  )
}

export default Missing
