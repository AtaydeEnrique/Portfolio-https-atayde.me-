import { useState } from "react";

import MainHeader from "./components/Layout/Header/MainHeader";
import Home from "./components/Sections/Home/Home";
import Cursor from "./components/UI/Cursor/Cursor";
import ContactMenu from "./components/Layout/ContactMenu/ContactMenu";
import Footer from "./components/Layout/Footer/Footer";

import "./App.css";
import ScrollingText from "./components/UI/ScrollingText/ScrollingText";
// import Goo from "./components/UI/Goo/Goo";

const App = () => {
  const [scroll, setScroll] = useState(0);
  const [bottom, setBottom] = useState(false);
  const [kraken, setKraken] = useState(false);

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  window.addEventListener("scroll", function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setBottom(true);
    }
  });

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

  const wheelEventHandler = (e) => {
    if (bottom) {
      setKraken((k) => !k);
      if (e.deltaY < 0) {
        setScroll((scroll) => scroll - 1);
      } else if (e.deltaY > 0) {
        setScroll((scroll) => scroll + +1);
      }
    }
  };

  return (
    <div onWheel={wheelEventHandler} className={`app${bottom ? " fixed" : ""}`}>
      {/* <Goo /> */}
      <Cursor />
      <MainHeader
        overflowHandler={overflowHandler}
        closeContactMenu={closeKraken}
        kraken={kraken}
      />
      <Home
        onClick={() => {
          setKraken((k) => !k);
        }}
      />
      <ScrollingText text="RESEARCH. STUDY. PRACTICE. BUILD." />
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
      <ContactMenu
        kraken={kraken}
        onClose={() => {
          setKraken((k) => !k);
        }}
      />
      <Footer />
    </div>
  );
};

export default App;
