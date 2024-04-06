import { FcGoogle, FcSteam } from "react-icons/fc";
import { useParallax } from 'react-scroll-parallax';

const CircleSkills = () => {
  const circleRotate = useParallax({
    rotate: [0, 360],
  });
  return (
    <>

      <div
        ref={circleRotate.ref}
        className="relative max-[351px]:scale-[.40] max-[415px]:scale-[.50] max-[490px]:scale-[.60] max-[554px]:scale-[.70] max-[620px]:scale-[.80] max-[697px]:scale-[.90] h-full w-full flex items-center justify-center"
      >
        <div
          id="circle-lang"
          className="relative p-10 border-2 group border-dashed rounded-full border-spacing-4 border-gray-400/50"
        >
          {
            Array.from({ length: 20 }).map((_, i) => {
              const angle = (i + 1) * (360 / 20);
              const rad = 300;
              const x = rad * Math.cos((angle * Math.PI) / 180);
              const y = rad * Math.sin((angle * Math.PI) / 180);

              return (
                <button
                  style={{
                    left: `calc(46% + ${x}px)`,
                    top: `calc(46% + ${y}px)`,
                  }}
                  className="absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
                >
                  <span
                    data-aos="zoom-in"
                    data-aos-delay={50 * i}
                    className="relative block transition-all group duration-500 rounded-full z-[2] bg-white p-1"
                  >
                    {i % 2 === 0 ? (
                      <FcSteam className="w-[32px] h-[32px]" />
                    ) : (
                      <FcGoogle className="w-[32px] h-[32px]" />
                    )}
                  </span>
                </button>
              );
            })
          }

          <button
            data-aos="zoom-out"
            data-aos-delay={1000}
            className="profile_item w-[500px] h-[500px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0"
          >
            <div
              className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500"
            >
              <img
                className="rounded-full"
                src="https://avatars.githubusercontent.com/u/93970726?v=4"
                width="200"
                height="200"
                alt=""
              />
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default CircleSkills