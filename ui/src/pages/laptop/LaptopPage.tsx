import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
        <p>Laptops</p>
        <ArrowRightSLineIcon />
        <p className="breadcrumbs__current">{title?.split('-').join(' ')}</p>
      </div>
      <div className="products">
        <h3>Laptop details here: </h3>
        {/* {JSON.stringify(laptop)} */}
      </div>
    </>
  )
}

export default LaptopPage
