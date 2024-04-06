const SomeTouch = () => {
  return (
    <>
      <section
        className="flex flex-col mx-auto px-5 gap-10 max-[485px]:mt-32 min-[485px]:my-32 max-w-6xl"
      >
        <div
          data-aos="fade-up"
          data-aos-delay={100}
          className="text-more text-center font-bold text-4xl min-[356px]:text-5xl sm:text-6xl"
          data-text="zaadevofc contact"
        >
          <span className="actual-text">Want something like this?</span>
          <span aria-hidden="true" className="hover-text">Want something like this?</span>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay={200}
          className="text-center w-fit mx-auto group hover:underline underline-offset-4 decoration-2 decoration-blue-500 decoration-wavy transition-all cursor-pointer font-bold !text-2xl min-[331px]:!text-3xl min-[427px]:!text-4xl min-[495px]:!text-5xl md:!text-6xl text-glow uppercase"
        >
          <span className="group-hover:text-emerald-300 transition-all delay-100"
          >Contact&nbsp;</span
          >
          <span className="group-hover:text-pink-500 transition-all delay-200"
          >me&nbsp;</span
          >
          <span className="group-hover:text-sky-500 transition-all delay-300">now!</span>
        </div>
      </section>

    </>
  )
}

export default SomeTouch