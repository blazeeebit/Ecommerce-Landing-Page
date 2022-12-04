import { useAppContext } from '../../../context/useContext'
import { Drawer } from '../../atoms'

const Cart = () => {

    const {
        openCart,
        setOpenCart
    } = useAppContext()

    const handleSetCartOpen = () => setOpenCart(prev => !prev)

  return (
    <Drawer open={openCart} onClose={handleSetCartOpen} anchor="right" title='App Cart'>
        <div className='bg-gray-700 px-10 h-full w-96'>
            Cart
        </div>
    </Drawer>
  )
}

export default Cart