import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Laptop as LaptopModel } from '../../models/laptop'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'

const LaptopPage = () => {
  const { title } = useParams()
  // const { id } = useParams()
  // const [laptop, setLaptop] = useState<LaptopModel[]>([])

  // useEffect(() => {
  //   async function loadLaptop() {
  //     try {
  //       const response = await fetch(`/api/laptop/${id}`, {
  //         method: 'GET',
  //       })
  //       const result = await response.json()
  //       setLaptop(result)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   loadLaptop()
  // }, [])
  return (
    <>
      <div className="breadcrumbs">
        <p>Home</p>
        <ArrowRightSLineIcon />
        <p>Computers & Tablets</p>
        <ArrowRightSLineIcon />
        <p>
          <Link to="/laptop">Laptops</Link>
        </p>
        <ArrowRightSLineIcon />
        <p className="breadcrumbs__current">{title?.split('-').join(' ')}</p>
      </div>
      <div className="productpage">
        <div className="productpage__main">
          <div>Pictures here: </div>
          <div>Laptop details here: </div>
        </div>
        {/* {JSON.stringify(laptop)} */}
      </div>
    </>
  )
}

export default LaptopPage
