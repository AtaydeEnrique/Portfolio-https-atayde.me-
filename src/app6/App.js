import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cursor from "../app1/components/UI/Cursor/Cursor";
import Entry from "./components/Entry";

import "./App.css";
import Home from "./components/Home";

function App() {
  const [background, setBackground] = useState(false);
  const backgroundHandler = () => {
    setBackground((b) => !b);
  };
  return (
    <>
      <div className="blog-background"></div>
      <div id="blog" className={background ? "blurred" : ""}>
        <Cursor></Cursor>
        <Navbar background={backgroundHandler} />
        <div className={background ? "blog-content blurred" : "blog-content"}>
          <Routes>
            <Route path="/" element={<Home />} />
            {["/Week-1", "/Week-2", "/Week-3"].map((path, i) => (
              <Route path={path} element={<Entry entry={path} key={i} />} />
            ))}
            <Route path="/FAQ" element={<div>FAQ</div>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
