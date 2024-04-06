
import { BIO } from "../consts";

const Hero = () => {
  return (
    <>
      <section id="hero zaadevofc"
        className="flex flex-col px-3 md:px-5 lg:px-0 gap-y-5 mx-auto my-20 max-w-[1500px]"
      >
        <div
          data-aos="fade-up"
          data-aos-delay={200}
          className="text-pretty text-center text-4xl min-[570px]:text-5xl md:text-6xl leading-tight mx-auto lg:w-3/4 xl:w-3/4 font-bold"
        >
          Make your <span className="decoration-red-500 underline-offset-4 underline"
          >dreams</span
          > come true by starting from <span className="text-yellow-500">dreaming</span>, <span
            className="text-sky-500">realizing</span
          >, <span className="text-pink-500">feeling{' '}</span>
          and then getting used to it
        </div>
        <p
          data-aos="fade-up"
          data-aos-delay={100}
          className="text-pretty text-center mx-auto text-[15px] md:text-lg min-[360px]:w-4/5 md:w-3/4 lg:w-2/4"
        >
          {BIO.GREET}
        </p>
      </section>
    </>
  )
}

export default Hero