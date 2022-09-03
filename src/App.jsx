import Navbar from "./components/Navbar";
import Button from "./components/Button";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
function App() {
  const { t, i18n } = useTranslation();
  const appLanguages = {
    pt: { nativeName: "PT" },
    en: { nativeName: "EN" },
  };
  const dropText = useRef(null);
  const handleHover = () => dropText.current.classList.add("show");

  const leaveHover = () => dropText.current.classList.remove("show");

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <section className="hero">
          <h1>
            <span>{t("hero.h1.firstLine")}</span>
            <span>{t("hero.h1.secondLine")}</span>
          </h1>
          <Button btnClass={"primary"} btnName={"project"} />
          <Button btnClass={"secondary"} btnName={"contact"} />
          <div className="icons-social">
            <a
              href="https://google.com"
              className="icon"
              onMouseOver={handleHover}
              onMouseLeave={leaveHover}
            >
              <box-icon
                name="linkedin-square"
                type="logo"
                color="#f5f5f1"
              ></box-icon>
              <div className="drop">
                <p>Linkedin</p>
              </div>
            </a>
            <a
              href="https://google.com"
              className="icon"
              onMouseOver={handleHover}
              onMouseLeave={leaveHover}
            >
              <box-icon name="github" type="logo" color="#f5f5f1"></box-icon>
              <div className="drop" ref={dropText}>
                <p>Github</p>
              </div>
            </a>
          </div>
          <div className="scroll-icon">
            <span>scroll</span>
          </div>
        </section>
      </main>
      <div className="lang">
        {Object.keys(appLanguages).map((language) => (
          <button
            type="submit"
            key={language}
            onClick={() => i18n.changeLanguage(language)}
            disabled={i18n.resolvedLanguage === language}
          >
            {appLanguages[language].nativeName}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
