import { Fragment } from "react";
import ReactDOM from "react-dom";
import WorkMenu from "../../Layout/Menus/WorkMenu";

import "./WorksModal.css";

const portalElement = document.querySelector("#overlays");

const WorksModal = ({ close, show }) => {
  const exiting = show === "exiting" ? "-closing" : "";

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className={`backdrop-works${exiting}`}>
          <div className={`backdrop-left${exiting}`}>
            <div onClick={close} className="nav-menu collapsed work-nav">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <WorkMenu />
          </div>
        </div>,
        portalElement
      )}
    </Fragment>
  );
};

export default WorksModal;
