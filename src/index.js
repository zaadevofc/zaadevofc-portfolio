import splitbee from "@splitbee/web";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Analytics } from "@vercel/analytics/react";
import aos from "aos";
import "aos/dist/aos.css";
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import React, { Suspense } from "react";
import AnimatedCursor from "react-animated-cursor";
import ReactDOM from "react-dom/client";
import { ParallaxProvider } from "react-scroll-parallax";
import Home from "./Home";
import Head from "./components/Head";
import "./styles/globals.css";

/** @type {import('@studio-freight/lenis').LenisOptions} */
const lenis = {
  lerp: 0.1,
  duration: 1.5,
  smoothTouch: false,
  infinite: false,
};

splitbee.init();
aos.init({
  duration: 500,
  easing: "ease-out-cubic",
  once: true,
  offset: -300,
}); 

const root = ReactDOM.createRoot(document.getElementById("root"), {
  throwIfNamespace: false,
});

root.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <Analytics />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#0ea5e9",
        }}
        outerStyle={{
          border: "3px solid #eab308",
        }}
      />
      <ReactLenis root options={lenis}>
        <ParallaxProvider>
          <Head />
          <Home />
        </ParallaxProvider>
      </ReactLenis>
    </Suspense>
  </React.StrictMode>
);
