import { useState } from "react";

import Brand from "./Brand";
import Modal from "../../UI/Modals/MenuModal";
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
          {menu && <Modal />}
          <li
            onClick={menuButtonHandler}
            className={`nav-menu${isCollapsed ? " collapsed" : ""}`}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
