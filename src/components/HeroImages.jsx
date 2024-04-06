import ScrollContainer from 'react-indiana-drag-scroll';

const HeroImages = () => {
  return (
    <>
      <section className="flex flex-col my-24 mx-auto min-[1800px]:max-w-6xl">
        <div className="px-3 mb-5 md:px-8 w-fit">
          <h1
            className="bg-yellow-500 border border-yellow-300 font-medium rounded-xl px-3 text-sm text-black"
          >
            I have no idea {":["}
          </h1>
        </div>
        <ScrollContainer
          id="gallery"
          className="flex gap-3 items-center no-scroll cursor-grab overflow-x-scroll overflow-y-hidden !-rotate-2 mx-auto"
        >
          {
            [...new Array(8)].map((x, i) => (
              <img
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className={`${i === 2 ? "w-44 sm:w-60 md:w-80" : "w-40 sm:w-52 md:w-72"} rounded-lg`}
                src={`/assets/zaadevofc-image${i + 1}.avif`}
                alt="zaadevofc"
                width={200}
                height={200}
              />
            ))
          }
        </ScrollContainer>
      </section>

      {/* <script>
        const gallery = document.getElementById("gallery");
  document.addEventListener("scroll", (e) => {
    const y = window.scrollY;

        gallery.scroll(y, 0);
  });
      </script> */}

    </>
  )
}

export default HeroImages