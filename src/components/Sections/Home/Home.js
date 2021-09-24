import { useState } from "react";

import TypeWriter from "../../UI/TypeWriter/TypeWriter";
import HomeImage from "./HomeImage";
import "./Home.css";

const Home = () => {
  const [colors, setColors] = useState(false);
  return (
    <section id="home-container">
      <div className="trainer">
        <div className="trainer-headline">
          <p>hi, my name is Ricardo Atayde</p>
          <p>
            I'm a{" "}
            <TypeWriter
              speed={100}
              delay1={1000}
              delay2={300}
              text={["Mechatronics Engineer", "FullStack"]}
              emoji={["🤖", "🔧", "💻", "🦾"]}
              classes="typewriter"
            />
            , focused on creating... asdasdd
          </p>
          <span className="country">
            <p>based in México</p>
          </span>
          <button
            onMouseEnter={() => setColors(true)}
            onMouseLeave={() => {
              setColors(false);
            }}
            className={`contact-btn${colors ? " fillup" : ""}`}
          >
            Contact me ;)
          </button>
        </div>
        <HomeImage />
      </div>
    </section>
  );
};

export default Home;
