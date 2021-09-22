import { Fragment } from "react";

import MainHeader from "./components/Layout/Header/MainHeader";
import Cursor from "./components/UI/Cursor/Cursor";

const App = () => {
  return (
    <Fragment>
      <Cursor />
      <MainHeader />
    </Fragment>
  );
};

export default App;
