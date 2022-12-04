import { AnimatePresence } from "framer-motion"
import Motion from "../../animations/motion"

type MenuItemProps = {
    label: string
    active: string
    onClick?(): void
}

const MenuItem = ({
    label,
    active,
    onClick
}: MenuItemProps) => {
  return (
    <div className={`text-xl font-bold cursor-pointer ${active === label ? 'text-white' : 'text-gray-400'}`} onClick={onClick}>
      {label}
      <AnimatePresence>
        {active === label && (
          <Motion animation="underLine">
            <div className="bg-orange-500 h-1" />
          </Motion>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MenuItem