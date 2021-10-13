import { Transition } from "react-transition-group";
import "./Menu.css";

const Menu = ({ entered, hovered, close, setKraken }) => {
  const hoverClass = hovered ? "menu-focus" : "menu-unfocused";
  return (
    <Transition in={entered} timeout={500} mountOnEnter unmountOnExit>
      {(state) => (
        <div className="modal-menu">
          <ul className={hoverClass}>
            <li>
              <a onClick={close} href="#about" alt="About">
                About<i></i>
                <span> 👋</span>
              </a>
            </li>
            <li>
              <a onClick={close} href="#skills" alt="Skills">
                Skills<i></i>
                <span> 📐</span>
              </a>
            </li>
            <li>
              <a onClick={close} href="#contact" alt="Contact">
                Contact<i></i>
                <span> 📫</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </Transition>
  );
};

export default Menu;
