import ReactDOM from "react-dom";

import "./MenuModal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};

const portalElement = document.querySelector("#overlays");

const MenuModal = (props) => {
  return ReactDOM.createPortal(
    <Backdrop onClose={props.onClose} />,
    portalElement
  );
};

export default MenuModal;
