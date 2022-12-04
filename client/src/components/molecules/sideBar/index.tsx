import { useAppContext } from '../../../context/useContext'
import { Drawer } from '../../atoms'
import SideBarItems from '../sideBarItems'

const SideBar = () => {

  const {
    openSideBar,
    setOpenSideBar
  } = useAppContext()

  const handleOpenSideBar = () => setOpenSideBar((prev: boolean) => !prev)

  return (
    <Drawer anchor='left' open={openSideBar} title='Side Bar' onClose={handleOpenSideBar}>
        <div className='bg-gray-700 h-full px-5 py-10 w-96'>
            <SideBarItems />
        </div>
    </Drawer>
  )
}

export default SideBar