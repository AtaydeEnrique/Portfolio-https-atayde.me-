import { useState, useEffect } from "react";
import lax from "lax.js";

import MainHeader from "./components/Layout/Header/MainHeader";
import Home from "./components/Sections/Home/Home";
import Cursor from "./components/UI/Cursor/Cursor";
import ContactMenu from "./components/Layout/ContactMenu/ContactMenu";
import About from "./components/Sections/About/About";
import Footer from "./components/Layout/Footer/Footer";

import "./App.css";
import ScrollingText from "./components/UI/ScrollingText/ScrollingText";
import Skills from "./components/Sections/Skills/Skills";
import Description from "./components/Sections/Description/Description";
import ScrollIcon from "./components/UI/Scrollcon/ScrollIcon";
// import Goo from "./components/UI/Goo/Goo";

const App = () => {
  const [kraken, setKraken] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onload = function () {
      lax.init();
      lax.addDriver("scrollY", function () {
        return window.scrollY;
      });
    };
  }, []);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  if (kraken) {
    document.body.classList.add("hidden");
  } else {
    document.body.classList.remove("hidden");
  }

  const overflowHandler = (menu) => {
    menu = !menu;
    if (menu) {
      document.body.classList.add("hidden");
    } else {
      document.body.classList.remove("hidden");
    }
  };

  const closeKraken = () => {
    setKraken((k) => !k);
  };

  return (
    <div className={`app ${kraken ? " hidden" : ""}`}>
      {!messageSent && (
        <MainHeader
          overflowHandler={overflowHandler}
          closeContactMenu={closeKraken}
          kraken={kraken}
          offset={offset}
        />
      )}
      <Cursor />
      <div className="color-waves"></div>
      {/* <Goo /> */}

      <Home
        onClick={() => {
          setKraken((k) => !k);
        }}
      />
      <Description />
      <ScrollingText text="RESEARCH. STUDY. PRACTICE. BUILD." />
      <div className="dot-divider"></div>
      <Skills />
      <ScrollingText direction="right" text="WORK. WORK. WORK. WORK." />
      <About />
      <Footer
        onClose={() => {
          setKraken((k) => !k);
          console.log(kraken);
        }}
      />
      <ContactMenu
        hideMenuHandler={() => {
          setMessageSent((k) => !k);
        }}
        kraken={kraken}
        onClose={() => {
          setKraken((k) => !k);
        }}
      />
      <ScrollIcon offset={offset} />
    </div>
  );
};

export default App;
