import { Fragment, useState } from "react";
import ReactDOM from "react-dom";

import Menu from "../../Layout/Menu/Menu";
import "./MenuModal.css";

const portalElement = document.querySelector("#overlays");

const MenuModal = ({ onClose, show }) => {
  const exiting = show === "exiting" ? "-closing" : "-open";
  const entered = show === "entered";
  const [hover, setHover] = useState(false);
  const mouseEnterHandler = () => {
    setHover(true);
    setTimeout(function () {
      setHover(false);
    }, 1000);
  };
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className={`backdrop pink${exiting}`} onClick={onClose}></div>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div className={`backdrop lime${exiting}`} onClick={onClose}></div>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div className={`backdrop purple${exiting}`} onClick={onClose}></div>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div
          className={`backdrop white${exiting}`}
          onClick={onClose}
          onMouseEnter={mouseEnterHandler}
        >
          <Menu hovered={hover} entered={entered} />
        </div>,
        portalElement
      )}
    </Fragment>
  );
};

export default MenuModal;
