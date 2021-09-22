import { Fragment } from "react";
import { useEffect } from "react/cjs/react.development";

import "./Cursor.css";

const Cursor = () => {
  useEffect(() => {
    let clientX = -100;
    let clientY = -100;
    const innerCursor = document.querySelector(".cursor-small");

    const initCursor = () => {
      document.addEventListener("mousemove", (e) => {
        clientX = e.clientX;
        clientY = e.clientY;
      });
      const render = () => {
        innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
    };

    initCursor();
  }, []);

  return (
    <Fragment>
      <div className="cursor cursor-small"></div>
      {/* <canvas className="cursor cursor-canvas" resize></canvas> */}
    </Fragment>
  );
};
export default Cursor;
