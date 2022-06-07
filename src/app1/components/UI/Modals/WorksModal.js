import { Fragment } from "react";
import ReactDOM from "react-dom";
import WorkMenu from "../../Layout/Menus/WorkMenu";
import ProjectMenu from "../../Layout/Menus/ProjectMenu";

import "./WorksModal.css";

const portalElement = document.querySelector("#overlays");

const WorksModal = ({ close, show, works }) => {
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
            {works === 1 && <WorkMenu />}
            {works === 2 && <ProjectMenu />}
          </div>
        </div>,
        portalElement
      )}
    </Fragment>
  );
};

export default WorksModal;
