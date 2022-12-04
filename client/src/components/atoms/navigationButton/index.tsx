type NavigationProps = {
    icon?: React.ReactNode
    type: 'next' | 'prev'
    onClick?(): void
}

const NavigationButton = ({
    icon,
    type,
    onClick
}: NavigationProps) => {

    const controlStyles = `absolute z-50 opacity-0 group-hover:opacity-40 hover:!opacity-50 transition duration-150
    ${icon ? 'top-1/2 transform -translate-y-1/2' : 'h-full top-0 w-16 bg-gray-400'}
    ${type === 'next' ? 'right-0' : 'left-0'}`

  return (
    <button className={controlStyles} onClick={onClick}>
        {type === 'next' && (icon ? icon : <></>)}
        {type === 'prev' && (icon ? icon : <></>)}
    </button>
  )
}

export default NavigationButton