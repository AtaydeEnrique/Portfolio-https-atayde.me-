import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Cursor from "../app1/components/UI/Cursor/Cursor";
import "./App.css";

function App() {
  const [background, setBackground] = useState(false);
  const backgroundHandler = () => {
    setBackground((b) => !b);
  };
  return (
    <div id="blog" className={background ? "blurred" : ""}>
      <Cursor></Cursor>
      <Navbar background={backgroundHandler} />
      <div className="blog-content">This is my blog thanks</div>
    </div>
  );
}

export default App;
