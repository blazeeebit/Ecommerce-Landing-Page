import { Slider } from "../../molecules"
import {SwiperSlide} from 'swiper/react'
import { HERO_IMAGES } from "../../constants/api"

const HeroSection = () => {
  return (
    <Slider slidesPerView={1} className="px-10 lg:px-20">
        {HERO_IMAGES.map((img, key) => (
            <SwiperSlide>
            <div className={`${img} bg-cover bg-center h-96 lg:h-[80vh]`} />
            </SwiperSlide>
        ))}
    </Slider>
  )
}

export default HeroSection