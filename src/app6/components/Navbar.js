import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "react-transition-group";

import "./Navbar.css";

function Navbar({ background, entries }) {
  const [triggerMenu, setTriggerMenu] = useState(false);
  const [menuText, setMenuText] = useState("Menu");

  const menuHandler = () => {
    background();
    setTriggerMenu((m) => !m);
    if (!triggerMenu) {
      setMenuText("Close Menu");
    } else {
      setMenuText("Menu");
    }
  };

  const toTopHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Transition in={triggerMenu} timeout={1500} mountOnEnter unmountOnExit>
        {(state) => (
          <div className={triggerMenu ? "blog-nav" : "blog-nav exit"}>
            <div className={triggerMenu ? "blog-menu" : "blog-menu exit"}>
              <Link to="">
                <div className="blog-option" onClick={menuHandler}>
                  Home
                </div>
              </Link>
              {entries?.map((entry, i) => (
                <Link to={entry.link.substring(1)} key={i}>
                  <div
                    className="blog-option"
                    onClick={() => {
                      menuHandler();
                      toTopHandler();
                    }}
                  >
                    {entry.title}
                  </div>
                </Link>
              ))}

              <Link to="FAQ">
                <div className="blog-option" onClick={menuHandler}>
                  How this blog works
                </div>
              </Link>
            </div>
          </div>
        )}
      </Transition>

      <div
        className={triggerMenu ? "blog-menu-btn actv" : "blog-menu-btn closed"}
        onClick={menuHandler}
      >
        {menuText}
      </div>
    </>
  );
}

export default Navbar;
