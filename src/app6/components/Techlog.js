import React from "react";
import TypeWriter from "../../app1/components/UI/TypeWriter/TypeWriter";

import "./Techlog.css";
function Techlog({ teclog }) {
  return (
    <div className="teclog-entry">
      <div className="teclog-body">
        <h1>
          <TypeWriter
            speed={60}
            delay1={100000}
            delay2={300}
            text={[teclog.title, "Encora Apprentice ++"]}
            emoji={["🧠", "📕", "📚", "📂"]}
            classes="typewriter"
          />
        </h1>
        <div className="teclog-text">{teclog.content}</div>
      </div>
    </div>
  );
}

export default Techlog;
