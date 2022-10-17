import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cursor from "../app1/components/UI/Cursor/Cursor";
import Entry from "./components/Entry";
import Home from "./components/Home";
import FAQ from "./components/FAQ";

import { entries } from "./assets/entries/entries";
import "./App.css";

function App() {
  const [background, setBackground] = useState(false);

  const backgroundHandler = () => {
    setBackground((b) => !b);
  };
  return (
    <>
      <div
        className={background ? "blog-background blurred" : "blog-background"}
      ></div>
      <div id="blog">
        <Cursor></Cursor>
        <Navbar background={backgroundHandler} entries={entries} />
        <div className={background ? "blog-content blurred" : "blog-content"}>
          <Routes>
            <Route path="/" element={<Home />} />
            {entries?.map((entry, i) => (
              <Route
                path={entry.link}
                element={<Entry entry={entry} key={i} />}
              />
            ))}
            <Route path="/FAQ" element={<FAQ></FAQ>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
