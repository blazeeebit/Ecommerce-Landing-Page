import { Masonry } from '@mui/lab'
import { PRODUCT_DATA } from '../../constants/api'
import { ProductListCard } from '../../molecules'

const ProductList = () => {
    return (
        <div className='px-10 lg:px-20 flex flex-col gap-y-10'>
            <div>
                <h2 className='text-white font-bold text-4xl'>
                    Best Selling Products
                </h2>
            </div>
            <Masonry columns={{
                sm: 1,
                md: 2,
                lg: 3
            }}>
                {PRODUCT_DATA.map((product, key) => (
                    <ProductListCard {...product} key={key} />
                ))}
            </Masonry>
        </div>
    )
}

export default ProductList