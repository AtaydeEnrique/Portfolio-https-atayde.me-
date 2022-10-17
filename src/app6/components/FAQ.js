import React from "react";
import reactLogo from "../../app1/assets/langs/reactfront.svg";
import githubLogo from "../assets/icons/github.svg";
import "./FAQ.css";
function FAQ() {
  return (
    <div className="blog-faq">
      <img className="spin" src={reactLogo} alt="react logo" />
      <p>Made with React</p>
      <a
        href="https://github.com/AtaydeEnrique/Portfolio-https-atayde.me-/tree/main/src/app6"
        target="_blank"
        rel="noreferrer"
      >
        <div className="FAQ-wrapper">
          <img src={githubLogo} alt="github logo" />
          <p>Link to this project</p>
        </div>
      </a>
    </div>
  );
}

export default FAQ;
