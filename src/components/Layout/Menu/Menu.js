import { Transition } from "react-transition-group";
import "./Menu.css";

const Menu = ({ entered, hovered }) => {
  const hoverClass = hovered ? "menu-focus" : "menu-unfocused";
  return (
    <Transition in={entered} timeout={500} mountOnEnter unmountOnExit>
      {(state) => (
        <div className="modal-menu">
          <ul className={hoverClass}>
            <li>
              <a href="#about" alt="About">
                About<i></i>
              </a>
            </li>
            <li>
              <a href="#skills" alt="Skills">
                Skills<i></i>
              </a>
            </li>
            <li>
              <a href="#contact" alt="Contact">
                Contact<i></i>
              </a>
            </li>
          </ul>
        </div>
      )}
    </Transition>
  );
};

export default Menu;
