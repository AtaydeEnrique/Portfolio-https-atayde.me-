import { Fragment, useState, useEffect } from "react";

import "./Cursor.css";

const Cursor = () => {
  const [onLink, setOnlink] = useState("small");

  useEffect(() => {
    let clientX = -100;
    let clientY = -100;
    const innerCursor = document.querySelector(".cursor");
    const outerCursor = document.querySelector(".cursor2");

    const initCursor = () => {
      document.addEventListener("mousemove", (e) => {
        clientX = e.clientX;
        clientY = e.clientY;
      });

      document.addEventListener("mouseover", (e) => {
        if (e.target.closest('li a[href="#about"]') !== null) {
          setOnlink("about big");
        } else if (e.target.closest('li a[href="#home-container"]') !== null) {
          setOnlink("hi big");
        } else if (e.target.closest('li a[href="#skills"]') !== null) {
          setOnlink("skills big");
        } else if (e.target.closest('li a[href="#contact"]') !== null) {
          setOnlink("contact big");
        } else if (e.target.closest('div[class="parallax-effect"]') !== null) {
          setOnlink("text big");
        } else if (e.target.closest('div[class="infinite"]') !== null) {
          setOnlink("inf big");
        } else if (
          e.target.closest(
            'div[class="skill-card"], div[class="work-box_content"]'
          ) !== null
        ) {
          setOnlink("skill big");
        } else if (e.target.closest('div[class="footer-info"]') !== null) {
          setOnlink("small");
        } else if (
          e.target.closest(
            'div[class="dot-divider"], div[class="waves-footer"]'
          ) !== null
        ) {
          setOnlink("anim big");
        } else {
          setOnlink("small");
        }
      });

      const render = () => {
        innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
        outerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
    };

    initCursor();
  }, []);

  return (
    <Fragment>
      <div className={`cursor cursor-${onLink}`}></div>
      <div className={`cursor cursor-${onLink} cursor2`}></div>
      {/* <canvas className="cursor cursor-canvas" resize="true"></canvas> */}
    </Fragment>
  );
};
export default Cursor;
