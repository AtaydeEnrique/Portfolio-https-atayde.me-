import { useState } from "react";
import { Transition } from "react-transition-group";
import "./Menu.css";

const Menu = ({ entered, hovered, close }) => {
  const [opacty, setOpacity] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });
  const state0 = { 1: null, 2: null, 3: null, 4: null };
  const state1 = { 1: true, 2: false, 3: false, 4: false };
  const state2 = { 1: false, 2: true, 3: false, 4: false };
  const state3 = { 1: false, 2: false, 3: true, 4: false };
  const state4 = { 1: false, 2: false, 3: false, 4: true };

  const hoverClass = hovered ? "menu-focus" : "menu-unfocused";

  return (
    <Transition in={entered} timeout={500} mountOnEnter unmountOnExit>
      {(state) => (
        <div className="modal-menu">
          <ul className={hoverClass}>
            <li
              className={
                opacty[1] === true
                  ? "li-opacity-true"
                  : opacty[1] === false
                  ? "li-opacity"
                  : ""
              }
            >
              <a
                onClick={close}
                href="#home-container"
                alt="Home"
                onMouseEnter={() => {
                  setOpacity(state1);
                }}
                onMouseLeave={() => {
                  setOpacity(state0);
                }}
              >
                hi<i></i>
                <span> 👋</span>
              </a>
            </li>
            <li
              className={
                opacty[2] === true
                  ? "li-opacity-true"
                  : opacty[2] === false
                  ? "li-opacity"
                  : ""
              }
            >
              <a
                onClick={close}
                href="#skills"
                alt="Skills"
                onMouseEnter={() => {
                  setOpacity(state2);
                }}
                onMouseLeave={() => {
                  setOpacity(state0);
                }}
              >
                skills<i></i>
                <span> 📐</span>
              </a>
            </li>
            <li
              className={
                opacty[3] === true
                  ? "li-opacity-true"
                  : opacty[3] === false
                  ? "li-opacity"
                  : ""
              }
            >
              <a
                onClick={close}
                href="#about"
                alt="About"
                onMouseEnter={() => {
                  setOpacity(state3);
                }}
                onMouseLeave={() => {
                  setOpacity(state0);
                }}
              >
                about<i></i>
                <span> 💬</span>
              </a>
            </li>
            <li
              className={
                opacty[4] === true
                  ? "li-opacity-true"
                  : opacty[4] === false
                  ? "li-opacity"
                  : ""
              }
            >
              <a
                onClick={close}
                href="#contact"
                alt="Contact"
                onMouseEnter={() => {
                  setOpacity(state4);
                }}
                onMouseLeave={() => {
                  setOpacity(state0);
                }}
              >
                contact<i></i>
                <span> 📫</span>
              </a>
            </li>
          </ul>
          <div className="menu-handy-links">
            <a
              href="https://github.com/AtaydeEnrique"
              target="_blank"
              rel="noreferrer"
            >
              <h5>Resume</h5>
            </a>
            <a
              href="https://github.com/AtaydeEnrique"
              target="_blank"
              rel="noreferrer"
            >
              <h5>GitHub</h5>
            </a>
            <a
              href="https://www.linkedin.com/in/ataydericardo/"
              target="_blank"
              rel="noreferrer"
            >
              <h5>LinkedIn</h5>
            </a>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default Menu;
