import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "react-transition-group";

import "./Navbar.css";

function Navbar({ background }) {
  const [triggerMenu, setTriggerMenu] = useState(false);
  const menuHandler = () => {
    background();
    setTriggerMenu((m) => !m);
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
              <Link to="Week-1">
                <div className="blog-option" onClick={menuHandler}>
                  Week 1
                </div>
              </Link>
              <Link to="Week-2">
                <div className="blog-option" onClick={menuHandler}>
                  Week 2
                </div>
              </Link>
              <Link to="Week-3">
                <div className="blog-option" onClick={menuHandler}>
                  Week 3
                </div>
              </Link>
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
        Menu
      </div>
    </>
  );
}

export default Navbar;
