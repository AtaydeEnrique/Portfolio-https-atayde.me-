import { Fragment } from "react";
import ReactDOM from "react-dom";

import "./ContactModal.css";

const portalElement = document.querySelector("#overlays");

const ContactModal = (props) => {
  const show = props.show;
  const exiting = show === "exiting" ? "wave-down" : "wave-up";

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className={`wave ${exiting}`}>{props.children}</div>,
        portalElement
      )}
    </Fragment>
  );
};

export default ContactModal;
