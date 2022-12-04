import { Swiper, SwiperProps } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.css'
import React from 'react'
import { NavigationButton } from '../../atoms'

type SliderProps = {
    children: React.ReactNode | JSX.Element
    title?: string
    className?: string
} & SwiperProps

const Slider = ({
    children,
    title,
    className,
    ...rest
}: SliderProps) => {

    const [swiperSlide, setSwiperSlide] = React.useState(null)

    const onNext = () => {
        swiperSlide.slideNext();
    }

    const onPrev = () => {
        swiperSlide.slidePrev();
    }

    return (
        <div className={`w-full relative ${className}`}>
            {title && (
                <div className='text-2xl text-white my-16 font-bold'>
                    {title}
                </div>
            )}
            <Swiper {...rest} onSwiper={(ev: any) => setSwiperSlide(ev)} 
            className="group"
            modules={[Navigation, Pagination]}>
                <NavigationButton type='prev' onClick={onPrev} />
                {children}
                <NavigationButton type='next' onClick={onNext} />
            </Swiper>
        </div>
    )
}

export default Slider