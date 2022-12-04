import React from 'react'

type ContextProps = {
    openSideBar: boolean
    setOpenSideBar: React.Dispatch<(prev: boolean) => boolean>
    openCart: boolean
    setOpenCart: React.Dispatch<(prev:boolean) => boolean>
}

type ChildrenProps = {
    children: React.ReactNode | JSX.Element
}

const InitialValues: ContextProps = {
    openSideBar: false,
    setOpenSideBar: () => undefined,
    openCart: false,
    setOpenCart: () => undefined
}

const AppContext = React.createContext<ContextProps>(InitialValues)

export const AppContextProvider = ({children}: ChildrenProps) => {
    const [openSideBar, setOpenSideBar] = React.useState<boolean>(InitialValues.openSideBar)
    const [openCart, setOpenCart] = React.useState<boolean>(InitialValues.openCart)

    const values = {
        openSideBar,
        setOpenSideBar,
        openCart,
        setOpenCart
    }

    return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
    const {...state} = React.useContext(AppContext)
    return {...state}
}

export default AppContextProvider