import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
const items = [
  {
    id: 1,
    title: "p1_name",
    img: "https://keojak.com/assets/images/brand__img.png",
    link: "https://keojak.com/",
    desc: "p1_desc",
    role: "p1_role",
    stack: "p1_stack",
    date: "p1_date",
  },
  {
    id: 2,
    title: "p2_name",
    img: "https://i0.wp.com/www.gideb.com/wp-content/uploads/2022/01/Mockup_shadowNon-1.png?fit=636%2C648&ssl=1",
    link: "https://gideb.com",
    desc: "p2_desc",
    role: "p2_role",
    stack: "p2_stack",
    date: "p2_date",
  },
  {
    id: 3,
    title: "p3_name",
    img: "https://cdn.imweb.me/thumbnail/20231208/9f1813cadd874.png",
    link: "https://www.herbee.co.kr/",
    desc: "p3_desc",
    role: "p3_role",
    stack: "p3_stack",
    date: "p3_date",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{t(item.title)}</h2>
            <p className="desc-1">{t(item.desc)}</p>
            <div className="project-desc">
              <div className="desc-row">
                <p className="desc-title">{t("date")}</p>
                <p className="desc">{t(item.date)}</p>
              </div>
              <div className="desc-row">
                <p className="desc-title">{t("role")}</p>
                <p className="desc">{t(item.role)}</p>
              </div>
              <div className="desc-row">
                <p className="desc-title">{t("languages")}</p>
                <p className="desc">{t(item.stack)}</p>
              </div>
            </div>
            <button style={{ margin: "auto", marginTop: "30px" }}>
              <a rel="noreferrer" target="_blank" href={item.link}>
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
  const { t } = useTranslation();

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
        <h1>{t("devProjects")}</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
