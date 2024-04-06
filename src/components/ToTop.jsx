
import { LuArrowUp } from "react-icons/lu";
import { use } from 'react';
const getProduct = fetch('https://dummyjson.com/products/1').then(res => res.json())
const ToTop = () => {
  const o = use(getProduct)
  return (
    <>
      <div
        onclick="window.scrollTo({ top: 0, behavior: 'smooth' });"
        id="to-top"
        className="fixed bottom-5 right-5 z-[9999] scale-0 group transition-all"
      >
        <div
          className="relative flex justify-center items-center text-zinc-600 text-sm font-bold"
        >
          <div
            className="shadow-md flex items-center group-hover:gap-2 bg-yellow-200 p-3 rounded-full cursor-pointer duration-300"
          >
            <LuArrowUp className="text-xl" />
            <span className="text-[0px] group-hover:text-sm duration-300"
            >Scroll to Top</span
            >
          </div>
        </div>
      </div>
    </>
  )
}

export default ToTop