import React from 'react';
import About from "./components/About";
import CircleSkills from './components/CircleSkills';
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import HeroImages from "./components/HeroImages";
import Layouts from './components/Layouts';
import Navbar from "./components/Navbar";
import SomeTouch from "./components/SomeTouch";
import ToTop from "./components/ToTop";
import squareLists from './images/square-lists.svg';

const Home = () => {
  return (
    <>
      <Layouts>
        <div
          style={{
            backgroundImage: `url(${squareLists})`,
          }}
          className="bg-center min-h-dvh w-full pb-20 overflow-hidden"
        >
          <ToTop />
          <Navbar />
          <Hero />
          <HeroImages />
          <About />
          <SomeTouch />
          <CircleSkills />
          <Gallery />
        </div>
      </Layouts>
    </>
  )
}

export default Home