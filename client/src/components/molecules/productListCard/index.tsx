import {Star} from '@mui/icons-material'

interface IProductListCard {
    title: string
    price: number
    rating: number
    img: string
}

const ProductListCard = ({
    title,
    price,
    rating,
    img
}: IProductListCard) => {
  return (
    <div className='flex flex-col w-full'>
        <div>
            <img src={`src/${img}`} alt="img" className='h-full w-full' />
        </div>
        <div className='flex flex-row justify-between items-center my-5'>
            <h2 className='text-white text-2xl font-bold'>{title}</h2>
            <p className='text-gray-400 font-semibold text-3xl'>${price}</p>
        </div>
    </div>
  )
}

export default ProductListCard