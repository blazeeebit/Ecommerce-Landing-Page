import { Menu, ShoppingBag } from '@mui/icons-material'
import { useAppContext } from '../../../context/useContext'
import { SideBar } from '../../molecules'

const MobileNavBar = () => {
    const {
        setOpenSideBar,
        setOpenCart
    } = useAppContext()

    const handleOpenSideBar = () => setOpenSideBar((prev: boolean) => !prev)

    const handleSetCartOpen = () => setOpenCart(prev => !prev)
    
  return (
    <div>
        <SideBar />
        <div className='bg-black flex flex-row justify-between items-center text-white p-10'>
            <Menu fontSize='large' onClick={handleOpenSideBar} />
            <ShoppingBag className="text-white" fontSize="large" onClick={handleSetCartOpen} />
        </div>
    </div>
  )
}

export default MobileNavBar