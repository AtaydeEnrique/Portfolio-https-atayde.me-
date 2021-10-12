import { useState, useEffect } from "react";
import lax from "lax.js";

import MainHeader from "./components/Layout/Header/MainHeader";
import Home from "./components/Sections/Home/Home";
import Cursor from "./components/UI/Cursor/Cursor";
import ContactMenu from "./components/Layout/ContactMenu/ContactMenu";
import Footer from "./components/Layout/Footer/Footer";

import "./App.css";
import ScrollingText from "./components/UI/ScrollingText/ScrollingText";
import Skills from "./components/Sections/Skills/Skills";
import Description from "./components/Sections/Description/Description";
// import Goo from "./components/UI/Goo/Goo";

const App = () => {
  const [kraken, setKraken] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  useEffect(() => {
    window.onload = function () {
      lax.init();
      lax.addDriver("scrollY", function () {
        return window.scrollY;
      });
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
      <section className="last">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
          reprehenderit. Fuga suscipit aperiam, corrupti maxime a, optio laborum
          nostrum alias hic quaerat reiciendis iste cupiditate ab adipisci,
          nihil atque voluptatem. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Doloribus, reprehenderit. Fuga suscipit aperiam,
          corrupti maxime a, optio laborum nostrum alias hic quaerat reiciendis
          iste cupiditate ab adipisci, nihil atque voluptatem. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Doloribus, reprehenderit. Fuga
          suscipit aperiam, corrupti maxime a, optio laborum nostrum alias hic
          quaerat reiciendis iste cupiditate ab adipisci, nihil atque
          voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          adipisci, nihil atque voluptatem. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Doloribus, reprehenderit. Fuga suscipit
          aperiam, corrupti maxime a, optio laborum nostrum alias hic quaerat
          reiciendis iste cupiditate ab adipisci, nihil atque voluptatem. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
          reprehenderit. Fuga suscipit aperiam, corrupti maxime a, optio laborum
          nostrum alias hic quaerat reiciendis iste cupiditate ab adipisci,
          nihil atque voluptatem. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Doloribus, reprehenderit. Fuga suscipit aperiam,
          corrupti maxime a, optio laborum nostrum alias hic quaerat reiciendis
          iste cupiditate ab adipisci, nihil atque voluptatem. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Doloribus, reprehenderit. Fuga
          suscipit aperiam, corrupti maxime a, optio laborum nostrum alias hic
          quaerat reiciendis iste cupiditate ab adipisci, nihil atque
          voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Doloribus, reprehenderit. Fuga suscipit aperiam, corrupti maxime a,
          optio laborum nostrum alias hic quaerat reiciendis iste cupiditate ab
          adipisci, nihil atque voluptatem. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Doloribus, reprehenderit. Fuga suscipit
          aperiam, corrupti maxime a, optio laborum nostrum alias hic quaerat
          reiciendis iste cupiditate ab adipisci, nihil atque voluptatem. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
          reprehenderit. Fuga suscipit aperiam, corrupti maxime a, optio laborum
          nostrum alias hic quaerat reiciendis iste cupiditate ab adipisci,
          nihil atque voluptatem. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Doloribus, reprehenderit. Fuga suscipit aperiam,
          corrupti maxime a, optio laborum nostrum alias hic quaerat reiciendis
          iste cupiditate ab adipisci, nihil atque voluptatem. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Doloribus, reprehenderit. Fuga
          suscipit aperiam, corrupti maxime a, optio laborum nostrum alias hic
          quaerat reiciendis iste cupiditate ab adipisci, nihil atque
          voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Doloribus, reprehenderit. Fuga suscipit aperiam, corrupti maxime a,
          optio laborum nostrum alias hic quaerat reiciendis iste cupiditate ab
          adipisci, nihil atque voluptatem. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Doloribus, reprehenderit. Fuga suscipit
          aperiam, corrupti maxime a, optio laborum nostrum alias hic quaerat
          reiciendis iste cupiditate ab adipisci, nihil atque voluptatem. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
          reprehenderit. Fuga suscipit aperiam, corrupti maxime a, optio laborum
          nostrum alias hic quaerat reiciendis iste cupiditate ab adipisci,
          nihil atque voluptatem. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Doloribus, reprehenderit. Fuga suscipit aperiam,
          corrupti maxime a, optio laborum nostrum alias hic quaerat reiciendis
          iste cupiditate ab adipisci, nihil atque voluptatem.Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Doloribus, reprehenderit. Fuga
          suscipit aperiam, corrupti maxime a, optio laborum nostrum alias hic
          quaerat reiciendis iste cupiditate ab adipisci, nihil atque
          voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Doloribus, reprehenderit. Fuga suscipit aperiam, corrupti maxime a,
          optio laborum nostrum alias hic quaerat reiciendis iste cupiditate ab
          adipisci, nihil atque voluptatem. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Doloribus, reprehenderit. Fuga suscipit
          aperiam, corrupti maxime a, optio laborum nostrum alias hic quaerat
          reiciendis iste cupiditate ab adipisci, nihil atque voluptatem. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
          reprehenderit. Fuga suscipit aperiam, corrupti maxime a, optio laborum
          nostrum alias hic quaerat reiciendis iste cupiditate ab adipisci,
          nihil atque voluptatem. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Doloribus, reprehenderit. Fuga suscipit aperiam,
          corrupti maxime a, optio laborum nostrum alias hic quaerat reiciendis
          iste cupiditate ab adipisci, nihil atque voluptatem. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Doloribus, reprehenderit. Fuga
          suscipit aperiam, corrupti maxime a, optio laborum nostrum alias hic
          quaerat reiciendis iste cupiditate ab adipisci, nihil atque
          voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Doloribus, reprehenderit. Fuga suscipit aperiam, corrupti maxime a,
          optio laborum nostrum alias hic quaerat reiciendis iste cupiditate ab
          adipisci, nihil atque voluptatem. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Doloribus, reprehenderit. Fuga suscipit
          aperiam, corrupti maxime a, optio laborum nostrum alias hic quaerat
          reiciendis iste cupiditate ab adipisci, nihil atque voluptatem.
        </p>
      </section>
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
    </div>
  );
};

export default App;
