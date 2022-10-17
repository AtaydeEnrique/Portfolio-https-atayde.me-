import React from "react";
import ScrollingText from "../../app1/components/UI/ScrollingText/ScrollingText";

import pkmnTrainer from "../assets/pokemon_trainer3.jpg";
import linkedIn from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import email from "../assets/icons/mail.svg";
import "./DataCard.css";

function DataCard({ date, title }) {
  return (
    <div className="blog-contact-data">
      <ScrollingText
        text={title.toUpperCase() + "// ENCORA APPRENTICE++"}
        customClass={"blog-scrolling"}
      />
      <img src={pkmnTrainer} alt="Ricardo Atayde" />
      <div className="data-wrapper">
        <h3>Ricardo Enrique Ortega Atayde</h3>
        <p>{date}</p>
      </div>
      <div className="media-wrapper">
        <a
          href="https://www.linkedin.com/in/ataydericardo/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedIn} alt="linkedin logo" />
        </a>
        <a
          href="https://github.com/AtaydeEnrique"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="github logo" />
        </a>
        <a
          href="mailto:atayde.ricardoe@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={email} alt="email logo" />
        </a>
      </div>
    </div>
  );
}

export default DataCard;
