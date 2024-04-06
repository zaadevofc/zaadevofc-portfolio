
import { LuAlignRight } from "react-icons/lu";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <img
            className="w-28"
            src="/assets/zaadevofc-logo-black-white.png"
            alt="zaadevofc portfolio"
          />
        </div>
        <div
          className="flex items-center max-[683px]:hidden gap-10 font-extralight tracking-wider text-sm"
        >
          <a href="#">Me.</a>
          <a href="#">About.</a>
          <a href="#">Contact.</a>
          <a href="#">Gallery.</a>
        </div>
        <span className="bg-emerald-500 p-2 rounded-full text-lg min-[361px]:text-xl">
          <LuAlignRight />
        </span>
      </nav>

    </>
  )
}

export default Navbar