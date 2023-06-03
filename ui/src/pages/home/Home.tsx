import LaptopList from '../laptop/LaptopList'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'
import Carousel from './Carousel'
import CategoryButtons from './CategoryButtons'
import CategoryTiles from './CategoryTiles'
const Home = () => {
  return (
    <>
      <div className="breadcrumbs">
        <p>Home</p>
        <ArrowRightSLineIcon />
        <p>Computers & Tablets</p>
        <ArrowRightSLineIcon />
        <p className="breadcrumbs__current">Laptops</p>
      </div>
      <div>
        <Carousel />
        <CategoryButtons />
        <CategoryTiles />
      </div>
      <LaptopList />
    </>
  )
}

export default Home
