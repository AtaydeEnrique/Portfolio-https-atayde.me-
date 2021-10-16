import { useState } from "react";

import TypeWriter from "../../UI/TypeWriter/TypeWriter";
import HomeImage from "./HomeImage";
import "./Home.css";

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
            <TypeWriter
              speed={80}
              delay1={1500}
              delay2={300}
              text={["Mechatronics Engineer", "FullStack"]}
              emoji={["🤖", "🔧", "💻", "📱"]}
              classes="typewriter"
            />
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
    </section>
  );
};

export default Home;
