import ScrollContainer from 'react-indiana-drag-scroll';
import { GALLERY } from "../consts";
import squareLists from '../images/square-lists.svg';

const Gallery = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${squareLists})`,
        }}
        className="items-center justify-center max-[485px]:mb-32 min-[485px]:my-32 bg-[#fffeee] bg-center border-2 border-b-0 border-pink-500 min-h-[200px] h-fit rounded-3xl max-w-6xl w-full overflow-hidden mx-auto text-black"
      >
        <div className="flex flex-col gap-7 mx-auto mt-16">
          <h1
            data-aos="fade-up"
            data-aos-delay={100}
            className="text-4xl min-[550px]:text-5xl font-extrabold mx-auto text-center"
          >
            My <span className="text-pink-500">gallery</span> works
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay={200}
            className="mx-auto min-[520px]:w-2/3 min-[997px]:w-1/2 text-center px-5"
          >
            Built with modern and responsive technology, it is also able to meet your
            needs and those of other people
          </p>
          <span
            data-aos="fade-up"
            data-aos-delay={300}
            className="w-20 h-1 bg-pink-500 mx-auto"></span>
        </div>
        <ScrollContainer className="max-h-[600px] overflow-y-scroll no-scroll mt-10">
          <div
            data-aos="fade-up"
            data-aos-delay={400}
            className="columns-2 sm:columns-3 lg:columns-5 mx-auto gap-3 space-y-4 px-5 min-[520px]:p-10 self-center cursor-grab"
          >
            {
              Array.from({ length: GALLERY.count }).map((x, i) => (
                <img
                  className={`break-inside-avoid shadow-lg shadow-gray-500 w-60 hover:shadow-gray-700 hover:scale-105 transition-all object-cover rounded-md`}
                  width={50}
                  height={50}
                  format="avif"
                  loading="lazy"
                  src={`${GALLERY.path}${i + 1}${GALLERY.format}`}
                  alt={`zaadevofc gallery ${i + 1}`}
                />
              ))
            }
          </div>
        </ScrollContainer>
      </div>

    </>
  )
}

export default Gallery