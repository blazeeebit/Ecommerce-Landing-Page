import { Accordian } from "../../atoms"
import { FAQ_QUESTIONS } from "../../constants/api"

const FAQSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 lg:p-20 gap-y-10">
        <h2 className="text-white font-bold text-4xl">
            Frequently Asked Questions
        </h2>
        <div className="w-full flex flex-col gap-y-2 xl:px-56">
            {FAQ_QUESTIONS.map((item, key) => (
                <Accordian {...item} key={key} />
            ))}
        </div>
    </div>
  )
}

export default FAQSection