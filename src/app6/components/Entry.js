import React from "react";
import TypeWriter from "../../app1/components/UI/TypeWriter/TypeWriter";
import DataCard from "./DataCard";

import "./Entry.css";

function Entry({ entry }) {
  return (
    <div className="blog-entry">
      <DataCard date={entry.date} title={entry.title} />
      <div className="entry-body">
        <h1>
          <TypeWriter
            speed={80}
            delay1={10000}
            delay2={300}
            text={[entry.title, "Encora Apprentice ++"]}
            emoji={["🧠", "📕", "📚", "📂"]}
            classes="typewriter"
          />
        </h1>
        <div className="entry-text">{entry.content}</div>
      </div>
    </div>
  );
}

export default Entry;
