import React from 'react'
import { Cart } from '../components/molecules'
import { Navbar, MobileNavBar, Footer } from '../components/organisms'
import AppContextProvider from '../context/useContext'
import { useWindowSize } from '../hooks/useWindowSize'

type PageLayoutProps = {
  children: React.ReactNode | JSX.Element
}

const PageLayout = ({
  children
}: PageLayoutProps) => {

  const { isMobile } = useWindowSize()

  return (
    <AppContextProvider>
      <div className='bg-black min-h-screen flex flex-col'>
        <Cart />
        {isMobile ? <MobileNavBar /> : <Navbar />}
        <div className='flex flex-col gap-y-10'>
          {children}
        </div>
        <Footer />
      </div>
    </AppContextProvider>
  )
}

export default PageLayout