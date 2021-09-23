import { Fragment } from "react";

import MainHeader from "./components/Layout/Header/MainHeader";
import Home from "./components/Sections/Home/Home";
import Cursor from "./components/UI/Cursor/Cursor";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Cursor />
      <MainHeader />
      <Home />
    </Fragment>
  );
};

export default App;
