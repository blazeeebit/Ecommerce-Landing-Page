import { MenuItems } from "../../molecules"
import {ShoppingBag} from '@mui/icons-material'
import { useAppContext } from "../../../context/useContext"

const NavBar = () => {

  const {
    setOpenCart
  } = useAppContext()

  const handleSetCartOpen = () => setOpenCart(prev => !prev)

  return (
    <div className="flex flex-row items-center w-full px-20 py-16">
        <div className="text-white font-bold text-4xl">Logo</div>
        <MenuItems />
        <div className="flex flex-row items-center gap-10">
            <ShoppingBag className="text-gray-500 hover:text-white transition duration-150 cursor-pointer" fontSize="large" 
            onClick={handleSetCartOpen} />
            <button className="bg-orange-500 py-3 px-7 text-white text-2xl font-bold rounded-sm">
                Sign In
            </button>
        </div>
    </div>
  )
}

export default NavBar