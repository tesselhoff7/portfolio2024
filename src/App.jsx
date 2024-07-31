import React, { useEffect } from "react";
import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import "./utils/i18n";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY !== 0) {
        event.preventDefault();
        const scrollSnapType = getComputedStyle(
          document.documentElement
        ).scrollSnapType;
        if (scrollSnapType.includes("mandatory")) {
          const scrollAmount =
            event.deltaY > 0 ? window.innerHeight : -window.innerHeight;
          window.scrollBy({
            top: scrollAmount,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div id="lang-version">
      <AnimatedCursor
        innerSize={20}
        outerSize={30}
        color="202, 202, 202"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      {/*<Cursor />*/}
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      {/*<section>
        <Services />
      </section>*/}
      {/*<section id="Portfolio">
        <Parallax type="portfolio" />
      </section>*/}
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
