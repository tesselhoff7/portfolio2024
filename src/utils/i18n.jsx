import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      greetings: "Welcome",
      myName: "Viacheslav Pak",
      jobTitle: "Frontend Developer",
      latestWork: "See the Latest Works",
      contactMe: "Contact Me",
      devProjects: "Projects",
      role: "Role",
      languages: "Tech Stack",
      date: "Date",

      p1_name: "Keojak",
      p1_desc: "Mobile Community App for café owners and barista.",
      p1_role:
        "Led Development on the Admin Panel Web App, Assisted in Mobile App Development",
      p1_stack:
        "React, React Native, MongoDB, Moleculer, Firebase, React Query, Zustand, Google Maps API, Insomnia",
      p1_date: "January - June 2024",

      p2_name: "Herbee",
      p2_desc:
        "Mobile Meet-up App. React Native, React, Firebase, Google Maps API, Insomnia",
      p2_role: "Led Development",
      p2_stack: "React Native, React, Firebase",
      p2_date: "August 2023 - January 2024",

      p3_name: "Gideb",
      p3_desc:
        "Self-Care Tools for Mental Health. React Native, React, Firebase",
      p3_role: "Led Development",
      p3_stack: "React Native, React, Firebase",
      p3_date: "August 2021 - January 2022",
    },
  },
  kr: {
    translation: {
      greetings: "안녕하세요",
      myName: "박승현",
      jobTitle: "프론트엔드 개발자",
      latestWork: "개발 프로젝트 보기",
      contactMe: "연락하기",
      devProjects: "개발 프로젝트",
      role: "역할",
      languages: "사용 기술",
      date: "개발 기간",

      p1_name: "커작",
      p1_desc:
        "카페 주인과 바리스타를 위한 모바일 커뮤니티 플랫폼.\n담당역할: 관리자 페이지 개발 담당 React Native, React, MongoDB, Moleculer, Firebase, Google Maps API",

      p2_name: "Herbee",
      p2_desc:
        "모바일 모임 앱. React Native, React, Firebase, Google Maps API, Insomnia",

      p3_name: "기댑",
      p3_desc:
        "정신 건강을 위한 자가 관리 플래트폼. React Native, React, Firebase",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
