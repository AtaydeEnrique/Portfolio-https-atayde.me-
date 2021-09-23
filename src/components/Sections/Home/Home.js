import TypeWriter from "../../UI/TypeWriter/TypeWriter";
import "./Home.css";
import HomeImage from "./HomeImage";

const Home = () => {
  return (
    <section className="home-container">
      <div className="trainer">
        <div className="trainer-headline">
          <p>hi, my name is Ricardo Atayde</p>
          <p>
            I'm a{" "}
            <TypeWriter
              speed={100}
              delay1={1000}
              delay2={300}
              text="Mechatronics Engineer"
              emoji={["🤖", "🔧", "💻"]}
            />
            , focused on creating....
          </p>
        </div>
        <HomeImage />
      </div>
    </section>
  );
};

export default Home;
