import {
    Star
} from '@mui/icons-material'

interface IProductCardSlide {
    title: string
    price: number
    rating: number
    img: string
}

const ProductCardSlide = ({
    title,
    price,
    rating,
    img
}: IProductCardSlide) => {
  return (
    <div className="flex flex-col">
        <div className='relative w-full h-96'>
            <img src={`src/${img}`} alt="img"  className="h-full w-full" />
        </div>
        <div className='flex flex-row justify-between items-center'>
            <h2 className='text-white text-2xl font-bold'>{title}</h2>
            <p className='text-gray-400 font-semibold text-3xl'>${price}</p>
        </div>
        <div className='flex flex-row gap-x-[1px]'>
            {Array(rating).fill().map((key) => (
                <Star key={key} className="text-orange-400" />
            ))}
        </div>
        <button className='cursor-pointer w-full py-2 bg-white font-bold text-xl mt-2'>
            Add To Cart
        </button>
    </div>
  )
}

export default ProductCardSlide