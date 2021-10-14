import { useState } from "react";

import Brand from "../../UI/Brand/Brand";
import MenuModal from "../../UI/Modals/MenuModal";
import { Transition } from "react-transition-group";
import "./MainHeader.css";

const MainHeader = ({ overflowHandler, kraken, closeContactMenu, offset }) => {
  const [menu, setMenu] = useState(false);

  const menuButtonHandler = () => {
    setMenu((m) => !m);
    overflowHandler(menu);
  };

  const liMenuButtonHandler = () => {
    setMenu((m) => !m);
    overflowHandler(menu);
  };

  const closeContactMenuHandler = () => {
    closeContactMenu();
  };

  const brandClass =
    offset === 0 || kraken || menu ? "brand-logo" : "brand-logo scrolled";

  return (
    <header className={`header-wrap`}>
      <nav className={`navbar${offset === 0 ? "" : " scrolled"}`}>
        <ul className="navbar-nav">
          <li className="brand">
            <Brand classes={brandClass} />
          </li>
          {!kraken ? (
            <li
              onClick={menuButtonHandler}
              className={`nav-menu${menu ? " collapsed" : ""}`}
            >
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </li>
          ) : (
            <li
              onClick={closeContactMenuHandler}
              className={`nav-menu collapsed`}
            >
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </li>
          )}
          <Transition in={menu} timeout={1000} mountOnEnter unmountOnExit>
            {(state) => <MenuModal close={liMenuButtonHandler} show={state} />}
          </Transition>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
