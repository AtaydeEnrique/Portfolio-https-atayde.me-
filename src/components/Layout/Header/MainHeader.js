import { useState, useEffect } from "react";

import Brand from "../../UI/Brand/Brand";
import MenuModal from "../../UI/Modals/MenuModal";
import { Transition } from "react-transition-group";
import "./MainHeader.css";

const MainHeader = ({ overflowHandler }) => {
  const [menu, setMenu] = useState(false);
  const [offset, setOffset] = useState(0);

  const menuButtonHandler = () => {
    setMenu((m) => !m);
    overflowHandler(menu);
  };

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  const brandClass =
    offset === 0 || menu ? "brand-logo" : "brand-logo scrolled";

  return (
    <header className="header-wrap">
      <nav className={`navbar${offset === 0 ? "" : " scrolled"}`}>
        <ul className="navbar-nav">
          <li className="brand">
            <Brand verticalOptn={true} classes={brandClass} scrolled={offset} />
          </li>
          <li
            onClick={menuButtonHandler}
            className={`nav-menu${menu ? " collapsed" : ""}`}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </li>
          <Transition in={menu} timeout={1000} mountOnEnter unmountOnExit>
            {(state) =>
              state && <MenuModal close={menuButtonHandler} show={state} />
            }
          </Transition>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
