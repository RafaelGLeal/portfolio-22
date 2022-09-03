import { useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [toggleState, setToggleState] = useState(true);
  const toggle = () => {
    setToggleState(toggleState === false ? true : false);
  };

  return (
    <nav className="navbar">
      <div className={`navbar-brand${toggleState ? "" : " colapsed"}`}>
        <span>Rafael L.</span>
      </div>
      <div
        className={`navbar-menu__toggle${toggleState ? "" : " colapsed"}`}
        onClick={toggle}
      >
        <span className="toggle-hamburguer"></span>
      </div>
      <ul className={`navbar-menu__list${toggleState ? " colapsed" : ""}`}>
        <li>
          <a href="#">
            <span>{t("navigator.home")}</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>{t("navigator.projects")}</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>{t("navigator.about")}</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>{t("navigator.contact")}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
