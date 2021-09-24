import { useState } from "react";

import MainHeader from "./components/Layout/Header/MainHeader";
import Home from "./components/Sections/Home/Home";
import Cursor from "./components/UI/Cursor/Cursor";
import "./App.css";

const App = () => {
  const [overflow, setOverflow] = useState(false);
  const overflowHandler = (menu) => {
    if (menu) {
      setOverflow(true);
    } else {
      setOverflow(false);
    }
  };
  console.log(overflow);
  return (
    <div className={`app${overflow ? "" : " hidden"}`}>
      <Cursor />
      <MainHeader overflowHandler={overflowHandler} />
      <Home />
      <Home></Home>
    </div>
  );
};

export default App;
