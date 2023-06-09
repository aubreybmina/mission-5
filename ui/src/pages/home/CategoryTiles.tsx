import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Laptop as LaptopModel } from '../../models/laptop'
import article1 from '../../assets/images/article1.jpg'
import article2 from '../../assets/images/article2.jpg'
import article3 from '../../assets/images/article3.jpg'

export default function CategoryTiles() {
  const [laptops, setLaptops] = useState<LaptopModel[]>([])
  const [showAltDetails, setshowAltDetails] = useState({
    hot: '',
    business: '',
    gaming: '',
  })

  useEffect(() => {
    async function loadLaptops() {
      try {
        const response = await fetch('/api/laptop', {
          method: 'GET',
        })
        const laptops = await response.json()
        setLaptops(laptops.laptops)
      } catch (error) {
        return error
      }
    }
    loadLaptops()
  }, [])

  const price = ['Special Price!', 'PB Tech Price']
  const articleImgs = [
    {
      img: article1,
      date: '04/5/2023',
      title: 'Top 5 Gaming Laptops',
      content:
        "Today we're having a look at 5 of the most affordable and most powerful Gaming Laptops available in New Zealand with...",
    },
    {
      img: article2,
      date: '02/05/2023',
      title: 'How to Use a Webcam for Remote Working & Learning',
      content:
        'As remote work and study become more prevalent, the intial step is purchasing the right equipment, but effectively using it i...',
    },
    {
      img: article3,
      date: '27/05/2023',
      title: 'Top BYOD Devices of 2023',
      content:
        'With BYOD season approaching fast, we have compiled a handy list of the top rated BYOD devices available right now...',
    },
  ]

  return (
    <>
      <div className="laptopList">
        <h3 className="header">What"s HOT right now</h3>
        <div className="header__button">
          <p>Shop all Laptops</p>
          <ArrowRightLineIcon />
        </div>
      </div>
      <div className="laptopList__container">
        {laptops.slice(0, 3).map((laptop) => (
          <div
            className="laptopList__container--tiles"
            onMouseEnter={() =>
              setshowAltDetails((prevState) => ({
                ...prevState,
                hot: laptop._id,
              }))
            }
            onMouseLeave={() =>
              setshowAltDetails((prevState) => ({ ...prevState, hot: '' }))
            }
          >
            <img
              className="laptopList__container--tiles_img"
              src={laptop.imageURL}
              alt="laptop image"
            />
            <div className="laptopList__container--tiles_text">
              {showAltDetails.hot !== laptop._id ? (
                <Link
                  to={`laptop/${laptop._id}/${laptop.brand} ${laptop.model} ${laptop.screenSize} ${laptop.category} Laptop`}
                  state={laptop}
                  className="laptopList__container--tiles_text_link"
                >
                  <p>
                    {laptop.brand} {laptop.model}
                  </p>
                </Link>
              ) : (
                <Link
                  to={`laptop/${laptop._id}/${laptop.brand} ${laptop.model} ${laptop.screenSize} ${laptop.category} Laptop`}
                  state={laptop}
                  className="laptopList__container--tiles_text_link"
                >
                  <p>
                    {`${laptop.brand} ${laptop.model} ${laptop.screenSize} ${laptop.category} Laptop ${laptop.cpuFamily} ${laptop.memorySize}GB ${laptop.ssdCapacity}GB SSD ${laptop.operatingSystem} ${laptop.warranty} - ${laptop.features}`}
                  </p>
                </Link>
              )}
              {laptop.special ? (
                <p className="laptopList__container--tiles_special">
                  {price[0]}
                </p>
              ) : (
                <p className="laptopList__container--tiles_noSpecial">
                  {price[1]}
                </p>
              )}
              <div className="laptopList__container--price_dollars">
                <p className="laptopList__container--price_dollars">
                  ${Math.floor(laptop.price).toLocaleString()}
                  <span className="laptopList__container--price_cents">
                    {(laptop.price % 1).toFixed(2).slice(2)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="popBusiness">
        <h3 className="header">Popular Business Laptops</h3>
        <Link to="laptop" className="header__link">
          <div className="header__button">
            <p>Shop all Business Laptops</p>
            <ArrowRightLineIcon />
          </div>
        </Link>
      </div>
      <div className="laptopList__container">
        {laptops
          .slice(0, 1)
          .concat(laptops.slice(3, 5))
          .map((laptop) => (
            <div
              className="laptopList__container--tiles"
              onMouseEnter={() =>
                setshowAltDetails((prevState) => ({
                  ...prevState,
                  business: laptop._id,
                }))
              }
              onMouseLeave={() =>
                setshowAltDetails((prevState) => ({
                  ...prevState,
                  business: '',
                }))
              }
            >
              <img
                className="laptopList__container--tiles_img"
                src={laptop.imageURL}
                alt="laptop image"
              />
              <div className="laptopList__container--tiles_text">
                {showAltDetails.business !== laptop._id ? (
                  <Link
                    to={`laptop/${laptop._id}/${laptop.brand} ${laptop.model} ${laptop.screenSize} ${laptop.category} Laptop`}
                    state={laptop}
                    className="laptopList__container--tiles_text_link"
                  >
                    <p>
                      {laptop.brand} {laptop.model}
                    </p>
                  </Link>
                ) : (
                  <Link
                    to={`laptop/${laptop._id}/${laptop.brand} ${laptop.model} ${laptop.screenSize} ${laptop.category} Laptop`}
                    state={laptop}
                    className="laptopList__container--tiles_text_link"
                  >
                    <p>
                      {`${laptop.brand} ${laptop.model} ${laptop.screenSize} ${laptop.category} Laptop ${laptop.cpuFamily} ${laptop.memorySize}GB ${laptop.ssdCapacity}GB SSD ${laptop.operatingSystem} ${laptop.warranty} - ${laptop.features}`}
                    </p>
                  </Link>
                )}
                {laptop.special ? (
                  <p className="laptopList__container--tiles_special">
                    {price[0]}
                  </p>
                ) : (
                  <p className="laptopList__container--tiles_noSpecial">
                    {price[1]}
                  </p>
                )}
                <div className="laptopList__container--price_dollars">
                  <p className="laptopList__container--price_dollars">
                    ${Math.floor(laptop.price).toLocaleString()}
                    <span className="laptopList__container--price_cents">
                      {(laptop.price % 1).toFixed(2).slice(2)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="popGaming">
        <h3 className="header">Popular Gaming Laptops</h3>
        <div className="header__button">
          <p>Shop all Gaming Laptops</p>
          <ArrowRightLineIcon />
        </div>
      </div>
      <div className="laptopList__container">
        {laptops.slice(5, 8).map((laptop) => (
          <div
            className="laptopList__container--tiles"
            onMouseEnter={() =>
              setshowAltDetails((prevState) => ({
                ...prevState,
                gaming: laptop._id,
              }))
            }
            onMouseLeave={() =>
              setshowAltDetails((prevState) => ({ ...prevState, gaming: '' }))
            }
          >
            <img
              className="laptopList__container--tiles_img"
              src={laptop.imageURL}
              alt="laptop image"
            />
            <div className="laptopList__container--tiles_text">
              {showAltDetails.gaming !== laptop._id ? (
                <Link
                  to={`laptop/${laptop._id}/${laptop.brand} ${laptop.model} ${laptop.screenSize} ${laptop.category} Laptop`}
                  state={laptop}
                  className="laptopList__container--tiles_text_link"
                >
                  <p>
                    {laptop.brand} {laptop.model}
                  </p>
                </Link>
              ) : (
                <Link
                  to={`laptop/${laptop._id}/${laptop.brand} ${laptop.model} ${laptop.screenSize} ${laptop.category} Laptop`}
                  state={laptop}
                  className="laptopList__container--tiles_text_link"
                >
                  <p>
                    {`${laptop.brand} ${laptop.model} ${laptop.screenSize} ${laptop.category} Laptop ${laptop.cpuFamily} ${laptop.memorySize}GB ${laptop.ssdCapacity}GB SSD ${laptop.operatingSystem} ${laptop.warranty} - ${laptop.features}`}
                  </p>
                </Link>
              )}
              {laptop.special ? (
                <p className="laptopList__container--tiles_special">
                  {price[0]}
                </p>
              ) : (
                <p className="laptopList__container--tiles_noSpecial">
                  {price[1]}
                </p>
              )}
              <div className="laptopList__container--price_dollars">
                <p className="laptopList__container--price_dollars">
                  ${Math.floor(laptop.price).toLocaleString()}
                  <span className="laptopList__container--price_cents">
                    {(laptop.price % 1).toFixed(2).slice(2)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="laptopArticles">
        <h3 className="header">Check out the latest Laptop articles</h3>
        <div className="header__button">
          <p>View more</p>
          <ArrowRightLineIcon />
        </div>
      </div>
      <div className="laptopList__articlesContainer">
        {articleImgs.map((article) => (
          <div className="laptopList__articlesContainer--tiles">
            <img
              className="laptopList__articlesContainer--tiles_img"
              src={article.img}
              alt="laptop image"
            />
            <div className="laptopList__articlesContainer--tiles_text">
              <p className="laptopList__articlesContainer--tiles_text-date">
                {article.date}
              </p>
              <p className="laptopList__articlesContainer--tiles_text">
                {article.title}
              </p>
              <p className="laptopList__articlesContainer--tiles_text-body">
                {article.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
