import React from "react";

import pkmnTrainer from "../assets/pokemon_trainer3.jpg";
import linkedIn from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import email from "../assets/icons/mail.svg";
import "./DataCard.css";

function DataCard({ date }) {
  return (
    <div className="blog-contact-data">
      <img src={pkmnTrainer} />
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
          <img src={linkedIn} />
        </a>
        <a
          href="https://github.com/AtaydeEnrique"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} />
        </a>
        <a
          href="mailto:atayde.ricardoe@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={email} />
        </a>
      </div>
    </div>
  );
}

export default DataCard;
