
import { LuArrowDown, LuBadgeCheck } from "react-icons/lu";
import { Parallax } from "react-scroll-parallax";
import { BIO, PICTURES, SOSMEDS, STATS } from "../consts";

const About = () => {
  return (
    <>
      <section
        id="about zaadevofc"
        className="flex flex-col mx-auto gap-20 my-32 px-5 xl:px-0 max-w-6xl"
      >
        <h1 className="text-center font-bold text-3xl">About.</h1>
        <div className="flex flex-col min-[750px]:flex-row justify-between gap-5">
          <div id="c1" className="flex flex-col min-[750px]:w-3/5 z-10">
            <div className="flex gap-7">
              <Parallax translateY={[-20, 20]}>
                <div
                  data-aos="fade-right"
                  data-aos-delay={500}
                  className="flex flex-col relative"
                >
                  <div
                    data-aos="fade-right"
                    className="z-10 absolute -top-2 -right-2 text-2xl p-1 bg-[#181818] rounded-full"
                  >
                    <LuBadgeCheck className="fill-sky-500" />
                  </div>
                  <div
                    className="h-32 min-[463px]:h-40 min-[587px]:h-56 min-[750px]:h-44 carousel carousel-vertical rounded-box"
                  >
                    {
                      PICTURES.map((x) => (
                        <div className="carousel-item w-full">
                          <img
                            data-aos="fade-right"
                            className="rounded-lg w-44 h-32 min-[463px]:w-60 min-[463px]:h-40 min-[587px]:h-56 min-[750px]:h-44 object-cover"
                            src={x}
                            alt={x}
                            width={200}
                            height={200}
                          />
                        </div>
                      ))
                    }
                  </div>
                  <h1
                    data-aos="fade-up"
                    className="flex gap-x-2 items-center mx-auto mt-3 text-[9px] min-[359px]:text-[11px] min-[463px]:text-xs text-gray-400"
                  >
                    <LuArrowDown />
                    hidden images
                  </h1>
                </div>
              </Parallax>
              <div id="about" className="flex flex-col gap-3 w-fit">
                <div
                  data-aos="fade-up"
                  data-aos-delay={300}
                  className="flex flex-col gap-1"
                >
                  <h1
                    className="font-bold text-[15px] min-[359px]:text-[18px] min-[382px]:text-xl min-[463px]:text-2xl"
                  >
                    {BIO.NAME}
                  </h1>
                  <span
                    className="text-gray-400 text-[11px] min-[359px]:text-[13px] min-[463px]:text-sm"
                  >{BIO.LABELS}</span
                  >
                </div>
                <p
                  data-aos="fade-up"
                  data-aos-delay={200}
                  className="text-pretty text-gray-400 mt-3 text-sm max-[750px]:hidden min-[760px]:text-base min-[930px]:hidden"
                >
                  {BIO.ADDRESS}
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-delay={500}
                  className="text-pretty lg:w-4/5 text-[15px] min-[615px]:text-base hidden max-[525px]:hidden max-[750px]:block min-[930px]:block"
                >
                  {BIO.ABOUT}
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-delay={200}
                  className="text-pretty text-gray-400 hidden max-[750px]:block mt-3 text-[11px] min-[359px]:text-xs min-[463px]:text-sm min-[760px]:text-base min-[930px]:block max-w-md"
                >
                  {BIO.ADDRESS}
                </p>
              </div>
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay={100}
              className="text-pretty lg:w-4/5 mt-8 text-[15px] min-[463px]:text-base max-[525px]:block max-[750px]:hidden min-[930px]:hidden"
            >
              {BIO.ABOUT}
            </p>
            <div
              className="columns-1 min-[525px]:columns-2 gap-3 space-y-4 h-full my-10 items-center"
            >
              {
                STATS.map((x, i) => (
                  <img
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                    className="border border-gray-700 rounded-md"
                    src={x}
                    width={500}
                    height={500}
                    alt="zaadevofc stats"
                  />
                ))
              }
            </div>
          </div>
          <div id="c2" className="flex flex-col gap-8 min-[750px]:w-1/3 max-w-6xl">
            <h1 className="font-bold text-xl">🔎 Looking for me?</h1>
            <div
              className="grid grid-cols-1 max-[470px]:grid-cols-2 max-[650px]:grid-cols-3 max-[750px]:grid-cols-4 min-[870px]:grid-cols-2 gap-6"
            >
              {
                SOSMEDS.map((x, i) => (
                  <a
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                    href={`https://${x.href}/${x.user}`}
                    target="_blank" rel="noreferrer"
                    className="flex items-center gap-3"
                  >
                    <img
                      alt=""
                      className="fill-sky-500 w-10"
                      src={`assets/${x.title}${x.format}`}
                    />
                    <div className="flex flex-col">
                      <h1 className="font-medium capitalize">{x.title}</h1>
                      <h1 className="text-sm text-gray-400">{x.user}</h1>
                    </div>
                  </a>
                ))
              }
            </div>
            <div className="flex flex-col gap-6 mt-5">
              <a
                data-aos="fade-up"
                data-aos-delay={800}
                href={`mailto:zaadevofc@gmail.com`}
                target="_blank" rel="noreferrer"
                className="flex items-center gap-3"
              >
                <img className="fill-sky-500 w-10" src={`assets/email.svg`} alt="" />
                <div className="flex flex-col">
                  <h1 className="font-medium capitalize">Email</h1>
                  <h1 className="text-sm text-gray-400">zaadevofc@gmail.com</h1>
                </div>
              </a>
              <a
                data-aos="fade-up"
                data-aos-delay={900}
                href={`/`}
                target="_blank" rel="noreferrer"
                className="flex items-center gap-3"
              >
                <img className="fill-sky-500 w-10" src={`assets/cv.svg`} alt="" />
                <div className="flex flex-col">
                  <h1 className="font-medium capitalize">Download CV</h1>
                  <h1 className="text-sm text-gray-400">zaadevofc@gmail.com</h1>
                </div>
              </a>
            </div>
            <iframe
              title="zaachat"
              data-aos="fade-left"
              data-aos-delay={1000}
              className="flex mx-auto border border-gray-700 rounded-md no-scroll"
              src="https://www5.cbox.ws/box/?boxid=950303&boxtag=Za0y9a"
              width="100%"
              allowtransparency="true"
              style={{ overflow: "hidden" }}
              height="450"
              allow="autoplay"></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default About