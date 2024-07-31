import "./hero.scss";
import { motion } from "framer-motion";
import RobotsContainer from "./RobotsContainer";
import { useTranslation } from "react-i18next";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>{t("myName")}</motion.h2>
          <motion.h1 variants={textVariants}>{t("jobTitle")}</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.a href="#Services">
              <motion.button variants={textVariants}>
                {t("latestWork")}
              </motion.button>
            </motion.a>
            <motion.a href="#Contact">
              <motion.button variants={textVariants}>
                {t("contactMe")}
              </motion.button>
            </motion.a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
        <div className="robotContainer">
          <RobotsContainer />
          {/*<div className="rotate-icons">
            <svg
              fill="#d3d3d3"
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12,6C6.3,6,2,8.15,2,11c0,2.45,3.19,4.38,7.71,4.88l-.42.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2-2a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-2-2a1,1,0,0,0-1.42,1.42l.12.11C6,13.34,4,12,4,11c0-1.22,3.12-3,8-3s8,1.78,8,3c0,.83-1.45,2-4.21,2.6A1,1,0,0,0,15,14.79a1,1,0,0,0,1.19.77C19.84,14.76,22,13.06,22,11,22,8.15,17.7,6,12,6Z" />
            </svg>
          </div>*/}
        </div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Frontend Web / Mobile developer
      </motion.div>

      {/*<div className="imageContainer">
        <RobotsContainer />
      </div>*/}
    </div>
  );
};

export default Hero;
