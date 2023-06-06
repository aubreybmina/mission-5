import { LaptopProps } from '../../types/Interfaces'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const LaptopDetails = () => {
  const { title } = useParams()
  const [selectValue, setSelectValue] = useState(0)

  const handleMemory = (event) => {
    const value = event.target.value
    setSelectValue(value)
  }
  return (
    <div className="productpage__main--details">
      <div className="productpage__main--details--productName">
        {title?.split('-').join(' ')}
      </div>
      <div className="productpage__main--details--options">
        <label>SSD Capacity</label>
        <div className="productpage__main--details--options--dropdown">
          <select>
            <option value="0">256 GB</option>
            <option value="100">500 GB</option>
            <option value="200">1000 GB</option>
          </select>
        </div>
      </div>

      <div className="productpage__main--details--options">
        <label>Memory Size</label>
        <div className="productpage__main--details--options--dropdown">
          <select onChange={handleMemory}>
            <option value="0">8 GB</option>
            <option value="100">16 GB</option>
            <option value="200">32 GB</option>
          </select>
        </div>
      </div>

      <div className="productpage__main--details--options">
        <label>Screen Size</label>
        <div className="productpage__main--details--options--dropdown">
          <select>
            <option value="0">13"</option>
            <option value="200">14"</option>
            <option value="400">16"</option>
          </select>
        </div>
      </div>

      <div className="productpage__main--details--options">
        <label>Price</label>
        <h2>{selectValue}</h2>
        <div className="productpage__main--button">
          <button>Buy Now</button>
        </div>
      </div>
      <div className="productpage__main--details--options">
        <label></label>
        <h2></h2>
        <div className="productpage__main--button">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default LaptopDetails
