import carousel1 from '../../assets/images/carousel1.png'
import carousel2 from '../../assets/images/carousel2.png'
import carousel3 from '../../assets/images/carousel3.png'
import { useEffect, useState } from 'react'

export default function Carousel() {
  const [sliderCount, setSliderCount] = useState(0)

  const counter = () => {
    setSliderCount((prevCount) => {
      const newCount = prevCount + 1
      if (newCount >= 11) {
        return 0
      }
      return newCount
    })
  }

  useEffect(() => {
    const interval = setInterval(counter, 1000)
    return () => clearInterval(interval)
  }, [])

  function currentCarousel() {
    let carouselPic
    if (sliderCount <= 3) {
      carouselPic = carousel1
    } else if (sliderCount > 3 && sliderCount <= 7) {
      carouselPic = carousel2
    } else {
      carouselPic = carousel3
    }
    return carouselPic
  }

  const carouselImage = currentCarousel()
  return (
    <div className="carousel">
      <img
        className="carousel__image"
        src={carouselImage}
        alt="carousel image"
      />
    </div>
  )
}
