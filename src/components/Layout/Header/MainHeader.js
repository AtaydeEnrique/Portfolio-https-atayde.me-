import { useState } from "react";

import Brand from "./Brand";
import MenuModal from "../../UI/Modals/MenuModal";
import { Transition } from "react-transition-group";
import "./MainHeader.css";

const MainHeader = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [menu, setMenu] = useState(false);

  const menuButtonHandler = () => {
    setIsCollapsed((btn) => !btn);
    setMenu((m) => !m);
  };

  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="brand">
            <Brand />
          </li>
          <li
            onClick={menuButtonHandler}
            className={`nav-menu${isCollapsed ? " collapsed" : ""}`}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </li>
          <Transition in={menu} timeout={1000} mountOnEnter unmountOnExit>
            {(state) => state && <MenuModal show={state} />}
          </Transition>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
