import { Fragment } from "react";
import ReactDOM from "react-dom";

import "./ContactModal.css";

const portalElement = document.querySelector("#overlays");

const ContactModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className="wave">{props.children}</div>,
        portalElement
      )}
    </Fragment>
  );
};

export default ContactModal;
