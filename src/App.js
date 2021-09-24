import { Fragment, useState } from "react";

import MainHeader from "./components/Layout/Header/MainHeader";
import Home from "./components/Sections/Home/Home";
import Cursor from "./components/UI/Cursor/Cursor";
import "./App.css";
import Footer from "./components/Layout/Footer/Footer";

const App = () => {
  const [overflow, setOverflow] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [bottom, setBottom] = useState(false);

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  window.addEventListener("scroll", function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setBottom(true);
    }
  });

  const overflowHandler = (menu) => {
    if (menu) {
      setOverflow(true);
    } else {
      setOverflow(false);
    }
  };

  const wheelEventeHandler = (e) => {
    if (bottom) {
      setOverflow(true);
      if (e.deltaY < 0) {
        setScroll((scroll) => scroll - 1);
      } else if (e.deltaY > 0) {
        setScroll((scroll) => scroll + +1);
      }
    }
  };
  console.log(scroll);
  return (
    <Fragment>
      <div
        onWheel={wheelEventeHandler}
        className={`app${overflow ? "" : " hidden"}`}
      >
        <Cursor />
        <MainHeader overflowHandler={overflowHandler} />
        <Home />

        <section className="last">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            reprehenderit. Fuga suscipit aperiam, corrupti maxime a, optio
            laborum nostrum alias hic quaerat reiciendis iste cupiditate ab
            adipisci, nihil atque voluptatem. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Doloribus, reprehenderit. Fuga
            suscipit aperiam, corrupti maxime a, optio laborum nostrum alias hic
            quaerat reiciendis iste cupiditate ab adipisci, nihil atque
            voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Doloribus, reprehenderit. Fuga suscipit aperiam, corrupti
            maxime a, optio laborum nostrum alias hic quaerat reiciendis iste
            cupiditate ab adipisci, nihil atque voluptatem. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Doloribus, reprehenderit.
            Fuga suscipit aperiam, corrupti maxime a, optio laborum nostrum
            alias hic quaerat reiciendis iste cupiditate ab adipisci, nihil
            atque voluptatem. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Doloribus, reprehenderit. Fuga suscipit aperiam,
            corrupti maxime a, optio laborum nostrum alias hic quaerat
            reiciendis iste cupiditate ab adipisci, nihil atque voluptatem.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            reprehenderit. Fuga suscipit aperiam, corrupti maxime a, optio
            laborum nostrum alias hic quaerat reiciendis iste cupiditate ab
            adipisci, nihil atque voluptatem. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Doloribus, reprehenderit. Fuga
            suscipit aperiam, corrupti maxime a, optio laborum nostrum alias hic
            quaerat reiciendis iste cupiditate ab adipisci, nihil atque
            voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Doloribus, reprehenderit. Fuga suscipit aperiam, corrupti
            maxime a, optio laborum nostrum alias hic quaerat reiciendis iste
            cupiditate ab adipisci, nihil atque voluptatem.Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Doloribus, reprehenderit. Fuga
            suscipit aperiam, corrupti maxime a, optio laborum nostrum alias hic
            quaerat reiciendis iste cupiditate ab adipisci, nihil atque
            voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Doloribus, reprehenderit. Fuga suscipit aperiam, corrupti
            maxime a, optio laborum nostrum alias hic quaerat reiciendis iste
            cupiditate ab adipisci, nihil atque voluptatem. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Doloribus, reprehenderit.
            Fuga suscipit aperiam, corrupti maxime a, optio laborum nostrum
            alias hic quaerat reiciendis iste cupiditate ab adipisci, nihil
            atque voluptatem. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Doloribus, reprehenderit. Fuga suscipit aperiam,
            corrupti maxime a, optio laborum nostrum alias hic quaerat
            reiciendis iste cupiditate ab adipisci, nihil atque voluptatem.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            reprehenderit. Fuga suscipit aperiam, corrupti maxime a, optio
            laborum nostrum alias hic quaerat reiciendis iste cupiditate ab
            adipisci, nihil atque voluptatem. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Doloribus, reprehenderit. Fuga
            suscipit aperiam, corrupti maxime a, optio laborum nostrum alias hic
            quaerat reiciendis iste cupiditate ab adipisci, nihil atque
            voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Doloribus, reprehenderit. Fuga suscipit aperiam, corrupti
            maxime a, optio laborum nostrum alias hic quaerat reiciendis iste
            cupiditate ab adipisci, nihil atque voluptatem. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Doloribus, reprehenderit.
            Fuga suscipit aperiam, corrupti maxime a, optio laborum nostrum
            alias hic quaerat reiciendis iste cupiditate ab adipisci, nihil
            atque voluptatem.Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Doloribus, reprehenderit. Fuga suscipit aperiam, corrupti
            maxime a, optio laborum nostrum alias hic quaerat reiciendis iste
            cupiditate ab adipisci, nihil atque voluptatem. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Doloribus, reprehenderit.
            Fuga suscipit aperiam, corrupti maxime a, optio laborum nostrum
            alias hic quaerat reiciendis iste cupiditate ab adipisci, nihil
            atque voluptatem. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Doloribus, reprehenderit. Fuga suscipit aperiam,
            corrupti maxime a, optio laborum nostrum alias hic quaerat
            reiciendis iste cupiditate ab adipisci, nihil atque voluptatem.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            reprehenderit. Fuga suscipit aperiam, corrupti maxime a, optio
            laborum nostrum alias hic quaerat reiciendis iste cupiditate ab
            adipisci, nihil atque voluptatem. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Doloribus, reprehenderit. Fuga
            suscipit aperiam, corrupti maxime a, optio laborum nostrum alias hic
            quaerat reiciendis iste cupiditate ab adipisci, nihil atque
            voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Doloribus, reprehenderit. Fuga suscipit aperiam, corrupti
            maxime a, optio laborum nostrum alias hic quaerat reiciendis iste
            cupiditate ab adipisci, nihil atque voluptatem. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Doloribus, reprehenderit.
            Fuga suscipit aperiam, corrupti maxime a, optio laborum nostrum
            alias hic quaerat reiciendis iste cupiditate ab adipisci, nihil
            atque voluptatem. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Doloribus, reprehenderit. Fuga suscipit aperiam,
            corrupti maxime a, optio laborum nostrum alias hic quaerat
            reiciendis iste cupiditate ab adipisci, nihil atque voluptatem.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            reprehenderit. Fuga suscipit aperiam, corrupti maxime a, optio
            laborum nostrum alias hic quaerat reiciendis iste cupiditate ab
            adipisci, nihil atque voluptatem. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Doloribus, reprehenderit. Fuga
            suscipit aperiam, corrupti maxime a, optio laborum nostrum alias hic
            quaerat reiciendis iste cupiditate ab adipisci, nihil atque
            voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Doloribus, reprehenderit. Fuga suscipit aperiam, corrupti
            maxime a, optio laborum nostrum alias hic quaerat reiciendis iste
            cupiditate ab adipisci, nihil atque voluptatem. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Doloribus, reprehenderit.
            Fuga suscipit aperiam, corrupti maxime a, optio laborum nostrum
            alias hic quaerat reiciendis iste cupiditate ab adipisci, nihil
            atque voluptatem. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Doloribus, reprehenderit. Fuga suscipit aperiam,
            corrupti maxime a, optio laborum nostrum alias hic quaerat
            reiciendis iste cupiditate ab adipisci, nihil atque voluptatem.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            reprehenderit. Fuga suscipit aperiam, corrupti maxime a, optio
            laborum nostrum alias hic quaerat reiciendis iste cupiditate ab
            adipisci, nihil atque voluptatem. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Doloribus, reprehenderit. Fuga
            suscipit aperiam, corrupti maxime a, optio laborum nostrum alias hic
            quaerat reiciendis iste cupiditate ab adipisci, nihil atque
            voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Doloribus, reprehenderit. Fuga suscipit aperiam, corrupti
            maxime a, optio laborum nostrum alias hic quaerat reiciendis iste
            cupiditate ab adipisci, nihil atque voluptatem.Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Doloribus, reprehenderit. Fuga
            suscipit aperiam, corrupti maxime a, optio laborum nostrum alias hic
            quaerat reiciendis iste cupiditate ab adipisci, nihil atque
            voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Doloribus, reprehenderit. Fuga suscipit aperiam, corrupti
            maxime a, optio laborum nostrum alias hic quaerat reiciendis iste
            cupiditate ab adipisci, nihil atque voluptatem. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Doloribus, reprehenderit.
            Fuga suscipit aperiam, corrupti maxime a, optio laborum nostrum
            alias hic quaerat reiciendis iste cupiditate ab adipisci, nihil
            atque voluptatem. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Doloribus, reprehenderit. Fuga suscipit aperiam,
            corrupti maxime a, optio laborum nostrum alias hic quaerat
            reiciendis iste cupiditate ab adipisci, nihil atque voluptatem.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            reprehenderit. Fuga suscipit aperiam, corrupti maxime a, optio
            laborum nostrum alias hic quaerat reiciendis iste cupiditate ab
            adipisci, nihil atque voluptatem. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Doloribus, reprehenderit. Fuga
            suscipit aperiam, corrupti maxime a, optio laborum nostrum alias hic
            quaerat reiciendis iste cupiditate ab adipisci, nihil atque
            voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Doloribus, reprehenderit. Fuga suscipit aperiam, corrupti
            maxime a, optio laborum nostrum alias hic quaerat reiciendis iste
            cupiditate ab adipisci, nihil atque voluptatem. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Doloribus, reprehenderit.
            Fuga suscipit aperiam, corrupti maxime a, optio laborum nostrum
            alias hic quaerat reiciendis iste cupiditate ab adipisci, nihil
            atque voluptatem.
          </p>
        </section>
        <Footer />
      </div>
    </Fragment>
  );
};

export default App;
