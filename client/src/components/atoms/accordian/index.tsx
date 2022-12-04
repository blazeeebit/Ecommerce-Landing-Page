import { AnimatePresence } from "framer-motion"
import Motion from "../../animations/motion"
import {
    ArrowDownward,
    ArrowUpward
} from '@mui/icons-material'
import React from "react"

interface IAccordian {
    title: string
    summery: string
}

const Accordian = ({
    title,
    summery
}: IAccordian) => {

    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    const handleOpenAccordian = () => setIsOpen(prev => !prev)

  return (
    <div className="bg-white w-full overflow-hidden flex flex-col">
        <div className="flex flex-row justify-between px-10 py-6">
            <h2 className="text-2xl font-bold">{title}</h2>
            <div onClick={handleOpenAccordian}>
                {isOpen ? <ArrowUpward /> : <ArrowDownward />}
            </div>
        </div>
        <AnimatePresence>
            {isOpen && (
                <Motion animation="openContent" className="bg-white">
                    <div className="px-10 py-6 text-lg">
                        {summery}
                    </div>
                </Motion>
            )}
        </AnimatePresence>
    </div>
  )
}

export default Accordian