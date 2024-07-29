import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Keojak",
    img: "https://keojak.com/assets/images/brand__img.png",
    link: "https://keojak.com/",
    desc: "Mobile Community App for café owners and barista. React Native, React, MongoDB, Moleculer, Firebase, Google Maps API",
  },
  {
    id: 2,
    title: "Gideb",
    img: "https://i0.wp.com/www.gideb.com/wp-content/uploads/2022/01/Mockup_shadowNon-1.png?fit=636%2C648&ssl=1",
    link: "https://gideb.com",
    desc: "Self-Care Tools for Mental Health. React Native, React, Firebase",
  },
  {
    id: 3,
    title: "Herbee",
    img: "https://cdn.imweb.me/thumbnail/20231208/9f1813cadd874.png",
    link: "https://www.herbee.co.kr/",
    desc: "Mobile Meet-up App. React Native, React, Firebase, Google Maps API, Insomnia",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a target="_blank" href={item.link}>
                Visit Homepage
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>What I was working on</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
