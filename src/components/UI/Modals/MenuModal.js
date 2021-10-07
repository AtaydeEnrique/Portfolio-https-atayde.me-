import { Fragment, useState } from "react";
import ReactDOM from "react-dom";

import Menu from "../../Layout/Menu/Menu";
import "./MenuModal.css";

const portalElement = document.querySelector("#overlays");

const MenuModal = ({ close, show }) => {
  const exiting = show === "exiting" ? "-closing" : "-open";
  const entered = show === "entered";
  const [hover, setHover] = useState(false);
  const mouseEnterHandler = () => {
    setHover(true);
    setTimeout(function () {
      setHover(false);
    }, 500);
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className={`backdrop pink${exiting}`}></div>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div className={`backdrop lime${exiting}`}></div>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div className={`backdrop purple${exiting}`}></div>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div
          className={`backdrop white${exiting}`}
          onMouseEnter={mouseEnterHandler}
        >
          <Menu close={close} hovered={hover} entered={entered} />
        </div>,
        portalElement
      )}
    </Fragment>
  );
};

export default MenuModal;
