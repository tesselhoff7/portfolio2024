import { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const root = document.getElementById("lang-version");

    if (language === "en") {
      root.style.setProperty("--font-family", '"DM Sans", sans-serif');
    } else {
      root.style.setProperty(
        "--font-family",
        '"Malgun Gothic", "Apple SD Gothic Neo", "Dotum", "Gulim", sans-serif'
      );
    }
  }, [language]);

  //const toggleLanguage = () => {
  //  setLanguage((prevLanguage) => (prevLanguage === "en" ? "ko" : "en"));
  //  t.changeLanguage(language);
  //};

  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {t("greetings")}
        </motion.span>
        {/*<div className="social">
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="" />
          </a>
        </div>*/}
        <div>
          <span onClick={() => i18n.changeLanguage("en")}>ENG</span>
          <span onClick={() => i18n.changeLanguage("kr")}>KOR</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
