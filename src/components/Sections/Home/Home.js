import { useState } from "react";

import TypeWriter from "../../UI/TypeWriter/TypeWriter";
import HomeImage from "./HomeImage";
import "./Home.css";
// import ScrollingText from "../../UI/ScrollingText/ScrollingText";

const Home = ({ onClick }) => {
  const [colors, setColors] = useState(false);
  return (
    <section id="home-container">
      <div className="trainer">
        <div className="trainer-headline">
          <p>
            hi, my name is Ricardo{" "}
            <TypeWriter
              speed={100}
              delay1={6000}
              delay2={300}
              text={["Atayde", "アタイで"]}
              emoji={["✌"]}
              classes="typewriter"
            />
          </p>
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
            onClick={onClick}
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
      {/* <ScrollingText
        direction="right"
        abs={true}
        customClass="menu-scrText"
        text="WORK. WORK. WORK. WORK."
      /> */}
    </section>
  );
};

export default Home;
