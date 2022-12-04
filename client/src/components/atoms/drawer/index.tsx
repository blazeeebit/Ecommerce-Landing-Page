import { Close } from '@mui/icons-material'
import { Drawer as MuiDrawer, DrawerProps as MuiDrawerProps} from '@mui/material'
import React from 'react'

type DrawerProps = {
    children: React.ReactNode | JSX.Element
    onClose?(): void
    title?: string
} & MuiDrawerProps

const Drawer = ({title, children, onClose, ...rest}: DrawerProps) => {
  return (
    <MuiDrawer {...rest}>
        <div className='flex flex-row justify-between text-2xl text-white font-bold bg-gray-700 p-10 items-center'>
          {title}
          <Close onClick={onClose} className="cursor-pointer"/>
        </div>
        {children}
    </MuiDrawer>
  )
}

export default Drawer