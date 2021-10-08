import { Fragment, useState, useEffect } from "react";

import "./Cursor.css";

const Cursor = () => {
  const [onLink, setOnlink] = useState("small");

  useEffect(() => {
    let clientX = -100;
    let clientY = -100;
    const innerCursor = document.querySelector(".cursor-small");

    const initCursor = () => {
      document.addEventListener("mousemove", (e) => {
        clientX = e.clientX;
        clientY = e.clientY;
      });

      document.addEventListener("mouseover", (e) => {
        if (e.target.closest('li a[href="#about"]') !== null) {
          setOnlink("about big");
        } else if (e.target.closest('li a[href="#skills"]') !== null) {
          setOnlink("skills big");
        } else if (e.target.closest('li a[href="#contact"]') !== null) {
          setOnlink("contact big");
        } else if (e.target.closest('div[class="trainer"]') !== null) {
          setOnlink("text big");
        } else if (e.target.closest('div[class="infinite"]') !== null) {
          setOnlink("inf big");
        } else if (e.target.closest('div[class="skill-card"]') !== null) {
          setOnlink("skill big");
        } else {
          setOnlink("small");
        }
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
      <div className={`cursor cursor-${onLink}`}></div>
      {/* <canvas className="cursor cursor-canvas" resize="true"></canvas> */}
    </Fragment>
  );
};
export default Cursor;
