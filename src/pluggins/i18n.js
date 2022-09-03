import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
i18next.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        navigator: {
          home: "home",
          about: "about",
          projects: "projects",
          contact: "contact",
        },
        hero: {
          scroll: "scroll",
          h1: {
            firstLine: "hello! im rafael leal.",
            secondLine: "i build websites.",
          },
        },
        buttons: {
          projects: "see projects",
          contact: "get in touch",
        },
        projects: {
          h2: {
            title: "projects",
            subtitle: "selected projects",
          },
        },
      },
    },
    pt: {
      translation: {
        navigator: {
          home: "início",
          about: "sobre",
          projects: "projetos",
          contact: "contato",
        },
        hero: {
          scroll: "scroll",
          h1: {
            firstLine: "olá! eu sou rafael leal.",
            secondLine: "eu construo websites.",
          },
        },
        buttons: {
          projects: "ver projetos",
          contact: "entre em contato",
        },
        projects: {
          h2: {
            title: "projetos",
            subtitle: "projetos selecionados",
          },
        },
      },
    },
  },
});
