import { useRef, useState } from "react";
const Navbar = () => {
  const [toggleState, setToggleState] = useState(true);
  const toggle = () => {
    setToggleState(toggleState === false ? true : false);
  };
  return (
    <nav className="navbar">
      <div className="navbar-brand">
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
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>projects</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>about</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
